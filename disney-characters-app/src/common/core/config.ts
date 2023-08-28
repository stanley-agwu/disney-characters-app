interface CoreConfig {
  endpoints: {
    root: string;
    character: string;
    characters: {
      name: string;
      page: string;
    };
  };
  routes: {
    root: string;
    characters: {
      url: string;
      page: string;
      name: string;
    };
    character: {
      url: string;
      characterId: string;
    };
  };
}

export const coreConfig: CoreConfig = {
  endpoints: {
    root: 'https://api.disneyapi.dev/character',
    character: 'https://api.disneyapi.dev/character/{0}',
    characters: {
      name: 'https://api.disneyapi.dev/character?name={0}&page={1}&pageSize={2}',
      page: 'https://api.disneyapi.dev/character?page={0}&pageSize={1}',
    },
  },
  routes: {
    root: '/',
    characters: {
      url: '/character',
      page: '/character?page={0}&pageSize={1}',
      name: '/character?name={0}&page={1}&pageSize={2}',
    },
    character: {
      url: '/character/{0}',
      characterId: 'character/:id',
    },
  },
};
