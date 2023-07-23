interface CoreConfig {
  endpoints: {
    url: string;
  };
  routes: {
    characters: {
      url: string;
      firstPage: string;
    };
    characterDetails: {
      url: string;
    };
  };
}

export const coreConfig: CoreConfig = {
  endpoints: {
    url: 'https://api.disneyapi.dev/character',
  },
  routes: {
    characters: {
      url: '/character',
      firstPage: '/character?page={0}&pageSize={1}',
    },
    characterDetails: {
      url: '/character/{0}',
    },
  },
};
