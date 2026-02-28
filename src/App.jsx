import { useDeck } from './hooks/useDeck';
import Progress from './components/Progress';
import Opening from './slides/Opening';
import Mirror from './slides/Mirror';
import Graph from './slides/Graph';
import Acceleration from './slides/Acceleration';
import AbundanceTrap from './slides/AbundanceTrap';
import Antidote from './slides/Antidote';
import Seducer from './slides/Seducer';
import Close from './slides/Close';

const slideConfigs = [
  { id: 'opening', steps: 7, component: Opening },
  { id: 'mirror', steps: 5, component: Mirror },
  { id: 'graph', steps: 5, component: Graph },
  { id: 'acceleration', steps: 11, component: Acceleration },  // 1 intro + 8 events + scroll trigger + quiet
  { id: 'abundance', steps: 9, component: AbundanceTrap },
  { id: 'antidote', steps: 6, component: Antidote },
  { id: 'seducer', steps: 1, component: Seducer },
  { id: 'close', steps: 4, component: Close },
];

function App() {
  const { currentSlide, currentStep, totalSlides, maxSteps, goToSlide } = useDeck(slideConfigs);

  return (
    <div className="deck">
      {slideConfigs.map((config, index) => {
        const SlideComponent = config.component;
        const isActive = index === currentSlide;

        return (
          <div
            key={config.id}
            className={`slide ${isActive ? 'active' : ''}`}
          >
            {isActive && <SlideComponent step={currentStep} />}
          </div>
        );
      })}

      <Progress
        current={currentSlide}
        total={totalSlides}
        onDotClick={goToSlide}
      />

      <div className="substep-indicator">
        {currentStep + 1}/{maxSteps}
      </div>
    </div>
  );
}

export default App;
