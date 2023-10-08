import instance from './instance';

export const getTeams = () => {
  return instance.get('/teams');
};
