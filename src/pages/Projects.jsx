import { bountiesWithRequirements } from '../../data/bounty.js';
import ProjectCard from '../component/ProjectCard/ProjectCard';
import styles from './projects.module.css'
export default function Projects() {
  return (
    <main>
      <h1 className={styles.heading}>Find Projects</h1>
      <div>
        {bountiesWithRequirements.map((bounty) => (
          <ProjectCard key={crypto.randomUUID()} data={bounty} />
        ))}
      </div>
    </main>
  );
}
