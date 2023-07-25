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
    characters: {
      url: string;
      page: string;
      name: string;
    };
    characterDetails: {
      url: string;
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
    characters: {
      url: '/character',
      page: '/character?page={0}&pageSize={1}',
      name: '/character?name={0}&page={1}&pageSize={2}',
    },
    characterDetails: {
      url: 'https://api.disneyapi.dev/character/{0}',
    },
  },
};
