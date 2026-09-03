import { error } from '@sveltejs/kit';
import { projectsData } from '$lib/data/projects';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    throw error(404, `Project "${params.slug}" was not found.`);
  }

  return {
    project
  };
};
