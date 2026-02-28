import { useState, useEffect, useCallback } from 'react';

export function useDeck(slideConfigs) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const totalSlides = slideConfigs.length;

  const maxSteps = slideConfigs[currentSlide]?.steps || 1;

  const next = useCallback(() => {
    if (currentStep < maxSteps - 1) {
      setCurrentStep(s => s + 1);
    } else if (currentSlide < totalSlides - 1) {
      setCurrentSlide(s => s + 1);
      setCurrentStep(0);
    }
  }, [currentSlide, currentStep, maxSteps, totalSlides]);

  const prev = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(s => s - 1);
    } else if (currentSlide > 0) {
      const prevSlideSteps = slideConfigs[currentSlide - 1]?.steps || 1;
      setCurrentSlide(s => s - 1);
      setCurrentStep(prevSlideSteps - 1);
    }
  }, [currentSlide, currentStep, slideConfigs]);

  const goToSlide = useCallback((index) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
      setCurrentStep(0);
    }
  }, [totalSlides]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
        e.preventDefault();
        prev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [next, prev]);

  useEffect(() => {
    let touchStartX = 0;
    let touchStartY = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      const dy = e.changedTouches[0].clientY - touchStartY;

      // Only trigger if horizontal swipe is dominant and exceeds threshold
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0) next();
        else prev();
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [next, prev]);

  return {
    currentSlide,
    currentStep,
    totalSlides,
    maxSteps,
    next,
    prev,
    goToSlide,
  };
}
