import configureStore, { MockStore } from 'redux-mock-store';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

export const defaultAppState = {
  character: {
    characters: [
      {
        _id: 46,
        films: [],
        shortFilms: [],
        tvShows: ['Miles from Tomorrowland'],
        videoGames: ['Miles from Tomorrowland: Missions'],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Admirals_Watson_and_Crick',
        name: 'Admirals Watson and Crick',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/c/c6/Admirals-Watson-and-Crick.png',
        createdAt: '12/04/2021 01:26:22',
        updatedAt: '20/12/2021 20:39:18',
        url: 'https://api.disneyapi.dev/characters/46',
        __v: 0,
      },
      {
        _id: 241,
        films: [],
        shortFilms: [],
        tvShows: [],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Erica_Ange',
        name: 'Erica Ange',
        imageUrl: 'https://static.wikia.nocookie.net/disney/images/8/88/Erica_pic.png',
        createdAt: '12/04/2021 01:32:50',
        updatedAt: '20/12/2021 20:39:19',
        url: 'https://api.disneyapi.dev/characters/241',
        __v: 0,
      },
      {
        _id: 545,
        films: ['Cinderella II: Dreams Come True'],
        shortFilms: [],
        tvShows: [],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Beatrice_and_Daphne',
        name: 'Beatrice and Daphne',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/b/ba/Cinderella2-disneyscreencaps.com-922.jpg',
        createdAt: '12/04/2021 01:35:58',
        updatedAt: '20/12/2021 20:39:23',
        url: 'https://api.disneyapi.dev/characters/545',
        __v: 0,
      },
      {
        _id: 852,
        films: [],
        shortFilms: [],
        tvShows: ["Chip 'n Dale Rescue Rangers"],
        videoGames: ["Chip 'n Dale Rescue Rangers (video game)"],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Bric,_Brac,_and_DTZ',
        name: 'Bric, Brac, and DTZ',
        imageUrl: 'https://static.wikia.nocookie.net/disney/images/8/86/Bricbracdtz.png',
        createdAt: '12/04/2021 01:39:29',
        updatedAt: '20/12/2021 20:39:26',
        url: 'https://api.disneyapi.dev/characters/852',
        __v: 0,
      },
      {
        _id: 853,
        films: ['Incredibles 2'],
        shortFilms: [],
        tvShows: [],
        videoGames: ['LEGO The Incredibles'],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Brick',
        name: 'Brick',
        imageUrl: 'https://static.wikia.nocookie.net/disney/images/9/96/Profile_-_Brick.png',
        createdAt: '12/04/2021 01:39:30',
        updatedAt: '20/12/2021 20:39:26',
        url: 'https://api.disneyapi.dev/characters/853',
        __v: 0,
      },
      {
        _id: 854,
        films: [],
        shortFilms: [],
        tvShows: ["I Didn't Do It"],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Danica_Bricker',
        name: 'Danica Bricker',
        imageUrl: 'https://static.wikia.nocookie.net/disney/images/1/15/Danica.png',
        createdAt: '12/04/2021 01:39:31',
        updatedAt: '20/12/2021 20:39:26',
        url: 'https://api.disneyapi.dev/characters/854',
        __v: 0,
      },
      {
        _id: 1034,
        films: [],
        shortFilms: [],
        tvShows: [],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Capricious_Harmony',
        name: 'Capricious Harmony',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/d/d1/Capricious_Harmony_-_Disney_Kingdoms.png',
        createdAt: '12/04/2021 01:41:58',
        updatedAt: '20/12/2021 20:39:27',
        url: 'https://api.disneyapi.dev/characters/1034',
        __v: 0,
      },
      {
        _id: 1138,
        films: [],
        shortFilms: ['A Knight for a Day'],
        tvShows: [],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Cedric',
        name: 'Cedric',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/d/d9/Cedric_A_Knight_for_a_Day.jpg',
        createdAt: '12/04/2021 01:43:17',
        updatedAt: '20/12/2021 20:39:29',
        url: 'https://api.disneyapi.dev/characters/1138',
        __v: 0,
      },
      {
        _id: 1139,
        films: [],
        shortFilms: [],
        tvShows: ['W.I.T.C.H. (TV series)'],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Lord_Cedric',
        name: 'Cedric',
        imageUrl: 'https://static.wikia.nocookie.net/disney/images/d/d5/Cedric1.jpg',
        createdAt: '12/04/2021 01:43:18',
        updatedAt: '20/12/2021 20:39:29',
        url: 'https://api.disneyapi.dev/characters/1139',
        __v: 0,
      },
      {
        _id: 1140,
        films: ['Sofia the First: Once Upon a Princess'],
        shortFilms: [],
        tvShows: ['Sofia the First'],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Cedric_the_Sorcerer',
        name: 'Cedric the Sorcerer',
        imageUrl: 'https://static.wikia.nocookie.net/disney/images/a/a7/Cedricmodel.png',
        createdAt: '12/04/2021 01:43:18',
        updatedAt: '20/12/2021 20:39:29',
        url: 'https://api.disneyapi.dev/characters/1140',
        __v: 0,
      },
      {
        _id: 1169,
        films: [],
        shortFilms: [],
        tvShows: ['Elena of Avalor'],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Charica',
        name: 'Charica',
        createdAt: '12/04/2021 01:43:44',
        updatedAt: '12/04/2021 01:43:44',
        url: 'https://api.disneyapi.dev/characters/1169',
        __v: 0,
      },
      {
        _id: 1315,
        films: [],
        shortFilms: ['Two Chips and a Miss'],
        tvShows: [],
        videoGames: ['Disney Tsum Tsum (game)', 'Disney Magical World 2', 'Kingdom Hearts χ'],
        parkAttractions: [
          'Main Street Electrical Parade',
          'Fantasmic!',
          'Tokyo DisneySea',
          "Mickey & Duffy's Spring Voyage",
          'Nightfall Glow',
          'Fashionable Easter',
        ],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Clarice',
        name: 'Clarice',
        imageUrl: 'https://static.wikia.nocookie.net/disney/images/2/2c/Clarice_.png',
        createdAt: '12/04/2021 01:45:54',
        updatedAt: '20/12/2021 20:39:30',
        url: 'https://api.disneyapi.dev/characters/1315',
        __v: 0,
      },
      {
        _id: 1316,
        films: ['Beauty and the Beast (1991 film)'],
        shortFilms: [],
        tvShows: [],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Clarice_(Beauty_and_the_Beast)',
        name: 'Clarice',
        imageUrl: 'https://static.wikia.nocookie.net/disney/images/0/09/Clarice.png',
        createdAt: '12/04/2021 01:45:55',
        updatedAt: '20/12/2021 20:39:30',
        url: 'https://api.disneyapi.dev/characters/1316',
        __v: 0,
      },
      {
        _id: 1524,
        films: [],
        shortFilms: [],
        tvShows: ['Big City Greens', 'Amphibia'],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Cricket_Green',
        name: 'Cricket Green',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/8/80/Profile_-_Cricket_Green.jpg',
        createdAt: '12/04/2021 01:48:43',
        updatedAt: '20/12/2021 20:39:32',
        url: 'https://api.disneyapi.dev/characters/1524',
        __v: 0,
      },
      {
        _id: 1525,
        films: [
          'Pinocchio (film)',
          'Fun and Fancy Free',
          'Who Framed Roger Rabbit',
          "Mickey's Magical Christmas: Snowed in at the House of Mouse",
          "Jiminy Cricket's Christmas",
          "Teacher's Pet (film)",
        ],
        shortFilms: [],
        tvShows: [
          'Walt Disney anthology series',
          'The Mickey Mouse Club',
          'Bonkers',
          'House of Mouse',
          'A Poem Is...',
          'Once Upon a Time',
        ],
        videoGames: [
          'Pinocchio (video game)',
          "Disney's Villains' Revenge",
          'Walt Disney World Quest: Magical Racing Tour',
          'Kingdom Hearts (series)',
          'Epic Mickey: Power of Illusion',
          'Disney Infinity (series)',
          'Disney Tsum Tsum (game)',
          'Disney Emoji Blitz',
        ],
        parkAttractions: [
          "Pinocchio's Daring Journey",
          'Fantasmic!',
          'Wishes: A Magical Gathering of Disney Dreams',
          "Walt Disney's Parade of Dreams",
          'SpectroMagic',
          'A Christmas Fantasy Parade',
          'Festival of Fantasy Parade',
          "Mickey's Once Upon a Christmastime Parade",
          'Jubilation!',
          'Mickey and the Magical Map',
          'Celebrate A Dreams Come True Parade',
        ],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Jiminy_Cricket',
        name: 'Jiminy Cricket',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/f/f0/Profile_-_Jiminy_Cricket.jpeg',
        createdAt: '12/04/2021 01:48:44',
        updatedAt: '20/12/2021 20:39:32',
        url: 'https://api.disneyapi.dev/characters/1525',
        __v: 0,
      },
      {
        _id: 1629,
        films: [],
        shortFilms: [],
        tvShows: ['The Replacements'],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Dick_Daring',
        name: 'Richard "Dick" Daring',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/e/ed/The-replacements-daran-norris-0.jpg',
        createdAt: '12/04/2021 01:50:19',
        updatedAt: '20/12/2021 20:39:33',
        url: 'https://api.disneyapi.dev/characters/1629',
        __v: 0,
      },
      {
        _id: 1654,
        films: ['Roger Rabbit II: The Toon Platoon'],
        shortFilms: [],
        tvShows: [],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Richie_Davenport',
        name: 'Richie Davenport',
        createdAt: '12/04/2021 01:50:39',
        updatedAt: '12/04/2021 01:50:39',
        url: 'https://api.disneyapi.dev/characters/1654',
        __v: 0,
      },
      {
        _id: 1736,
        films: ['Leroy & Stitch'],
        shortFilms: [],
        tvShows: ['Lilo & Stitch: The Series'],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Derrick',
        name: 'Derrick',
        imageUrl: 'https://static.wikia.nocookie.net/disney/images/f/fc/566_-_Derrick.jpg',
        createdAt: '12/04/2021 01:51:45',
        updatedAt: '20/12/2021 20:39:34',
        url: 'https://api.disneyapi.dev/characters/1736',
        __v: 0,
      },
      {
        _id: 1737,
        films: ['Pirates of the Caribbean: On Stranger Tides'],
        shortFilms: [],
        tvShows: [],
        videoGames: ['LEGO Pirates of the Caribbean: The Video Game'],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Derrick_(Pirates_of_the_Caribbean)',
        name: 'Derrick',
        createdAt: '12/04/2021 01:51:46',
        updatedAt: '12/04/2021 01:51:46',
        url: 'https://api.disneyapi.dev/characters/1737',
        __v: 0,
      },
      {
        _id: 2062,
        films: ["The Little Mermaid: Ariel's Beginning"],
        shortFilms: [],
        tvShows: [],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Electric_Eels',
        name: 'Electric Eels',
        imageUrl: 'https://static.wikia.nocookie.net/disney/images/1/1a/Electric_Eels.jpg',
        createdAt: '12/04/2021 01:56:49',
        updatedAt: '20/12/2021 20:39:38',
        url: 'https://api.disneyapi.dev/characters/2062',
        __v: 0,
      },
      {
        _id: 2063,
        films: [],
        shortFilms: [],
        tvShows: ['Jake and the Never Land Pirates'],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Electric_Storm_Eel',
        name: 'Electric Storm Eel',
        imageUrl: 'https://static.wikia.nocookie.net/disney/images/4/4a/Electric_Storm_Eel.jpg',
        createdAt: '12/04/2021 01:56:50',
        updatedAt: '20/12/2021 20:39:38',
        url: 'https://api.disneyapi.dev/characters/2063',
        __v: 0,
      },
      {
        _id: 2107,
        films: [],
        shortFilms: [],
        tvShows: ['The Owl House'],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Emira_and_Edric_Blight',
        name: 'Emira and Edric Blight',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/0/0a/Profile_-_Emira_and_Edric_Blight.png',
        createdAt: '12/04/2021 01:57:25',
        updatedAt: '20/12/2021 20:39:38',
        url: 'https://api.disneyapi.dev/characters/2107',
        __v: 0,
      },
      {
        _id: 2129,
        films: [],
        shortFilms: [],
        tvShows: [],
        videoGames: [],
        parkAttractions: ['Tower of Terror (Tokyo DisneySea)', 'Turtle Talk with Crush'],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Beatrice_Rose_Endicott',
        name: 'Beatrice Rose Endicott',
        imageUrl: 'https://static.wikia.nocookie.net/disney/images/1/10/Beatrice_Rose_Endicott.png',
        createdAt: '12/04/2021 01:57:44',
        updatedAt: '20/12/2021 20:39:38',
        url: 'https://api.disneyapi.dev/characters/2129',
        __v: 0,
      },
      {
        _id: 2132,
        films: [],
        shortFilms: [],
        tvShows: ['Kim Possible'],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Eric_(Kim_Possible)',
        name: 'Eric',
        imageUrl: 'https://static.wikia.nocookie.net/disney/images/7/73/Eric_Kim_Possoble.jpg',
        createdAt: '12/04/2021 01:57:47',
        updatedAt: '20/12/2021 20:39:38',
        url: 'https://api.disneyapi.dev/characters/2132',
        __v: 0,
      },
      {
        _id: 2133,
        films: [
          'The Little Mermaid',
          'The Little Mermaid II: Return to the Sea',
          "Mickey's Magical Christmas: Snowed in at the House of Mouse",
          'Once Upon a Halloween',
          'The Little Mermaid (live-action film)',
        ],
        shortFilms: [],
        tvShows: [
          'The Little Mermaid (TV series)',
          'House of Mouse',
          'Once Upon a Time',
          'The Wonderful World of Disney: The Little Mermaid Live!',
        ],
        videoGames: [
          'The Little Mermaid (video game)',
          'The Little Mermaid 2: Pinball Frenzy',
          'Kingdom Hearts II',
          'Disney Princess Enchanting Storybooks',
          'Hidden Worlds',
          'Disney Magic Kingdoms',
          'Disney Emoji Blitz',
        ],
        parkAttractions: [
          'Fantasmic!',
          'Voyage of the Little Mermaid',
          "The Little Mermaid: Ariel's Undersea Adventure",
          'Celebrate a Dreams Come True Parade',
          "Mickey's Once Upon a Christmastime Parade",
          'A Christmas Fantasy Parade',
          'Happily Ever After (fireworks show)',
        ],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Prince_Eric',
        name: 'Prince Eric',
        imageUrl: 'https://static.wikia.nocookie.net/disney/images/f/f1/Profile_-_Prince_Eric.jpeg',
        createdAt: '12/04/2021 01:57:48',
        updatedAt: '20/12/2021 20:39:38',
        url: 'https://api.disneyapi.dev/characters/2133',
        __v: 0,
      },
      {
        _id: 2134,
        films: [],
        shortFilms: [],
        tvShows: ['Mickey Mouse (TV series)'],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Erica_(cruise_director)',
        name: 'Erica',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/d/d1/Profile_-_Erica_the_Cruise_Director.jpg',
        createdAt: '12/04/2021 01:57:49',
        updatedAt: '20/12/2021 20:39:38',
        url: 'https://api.disneyapi.dev/characters/2134',
        __v: 0,
      },
      {
        _id: 2297,
        films: [],
        shortFilms: [],
        tvShows: ['Gravity Falls'],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Filbrick_Pines',
        name: 'Filbrick Pines',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/c/c1/Filbrick_Pines_appearance.png',
        createdAt: '12/04/2021 02:00:02',
        updatedAt: '20/12/2021 20:39:40',
        url: 'https://api.disneyapi.dev/characters/2297',
        __v: 0,
      },
      {
        _id: 2334,
        films: ["Darby O'Gill and the Little People"],
        shortFilms: [],
        tvShows: [],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Lord_Fitzpatrick',
        name: 'Lord Fitzpatrick',
        imageUrl: 'https://static.wikia.nocookie.net/disney/images/6/65/5755-4383.jpg',
        createdAt: '12/04/2021 02:00:33',
        updatedAt: '20/12/2021 20:39:40',
        url: 'https://api.disneyapi.dev/characters/2334',
        __v: 0,
      },
      {
        _id: 2335,
        films: [],
        shortFilms: [],
        tvShows: ['The Suite Life of Zack & Cody', 'The Suite Life on Deck', 'Hannah Montana'],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Maddie_Fitzpatrick',
        name: 'Maddie Fitzpatrick',
        imageUrl: 'https://static.wikia.nocookie.net/disney/images/1/18/MaddieFitzpatrick.jpg',
        createdAt: '12/04/2021 02:00:34',
        updatedAt: '20/12/2021 20:39:40',
        url: 'https://api.disneyapi.dev/characters/2335',
        __v: 0,
      },
      {
        _id: 2341,
        films: [],
        shortFilms: [],
        tvShows: ['Kim Possible'],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Brick_Flagg',
        name: 'Brick Flagg',
        imageUrl: 'https://static.wikia.nocookie.net/disney/images/6/61/Char_33594.jpg',
        createdAt: '12/04/2021 02:00:38',
        updatedAt: '20/12/2021 20:39:41',
        url: 'https://api.disneyapi.dev/characters/2341',
        __v: 0,
      },
      {
        _id: 2369,
        films: [],
        shortFilms: [],
        tvShows: [],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Rick_Flint',
        name: 'Rick Flint',
        imageUrl: 'https://static.wikia.nocookie.net/disney/images/4/40/Rick_Flint.jpg',
        createdAt: '12/04/2021 02:01:01',
        updatedAt: '20/12/2021 20:39:41',
        url: 'https://api.disneyapi.dev/characters/2369',
        __v: 0,
      },
      {
        _id: 2471,
        films: ['Tangled', 'Tangled: Before Ever After'],
        shortFilms: ['Tangled Ever After'],
        tvShows: ['Once Upon a Time', 'Tangled: The Series'],
        videoGames: [
          'Disney Princess Enchanting Storybooks',
          'Hidden Worlds',
          'Disney Crossy Road',
          'Kingdom Hearts III',
        ],
        parkAttractions: ['Celebrate the Magic'],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/King_Frederic',
        name: 'King Frederic',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/5/57/King_of_Corona_Tangled_.jpg',
        createdAt: '12/04/2021 02:02:28',
        updatedAt: '20/12/2021 20:39:42',
        url: 'https://api.disneyapi.dev/characters/2471',
        __v: 0,
      },
      {
        _id: 2472,
        films: [],
        shortFilms: [],
        tvShows: [],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Frederick_the_Monkey',
        name: 'Frederick the Monkey',
        imageUrl: 'https://static.wikia.nocookie.net/disney/images/6/6b/Frederick_in_Suit.jpg',
        createdAt: '12/04/2021 02:02:29',
        updatedAt: '20/12/2021 20:39:42',
        url: 'https://api.disneyapi.dev/characters/2472',
        __v: 0,
      },
      {
        _id: 2473,
        films: ['Big Hero 6'],
        shortFilms: [],
        tvShows: ['Big Hero 6: The Series'],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Mr._Frederickson',
        name: 'Mr. Frederickson',
        imageUrl: 'https://static.wikia.nocookie.net/disney/images/a/aa/Fred%27s_Father.png',
        createdAt: '12/04/2021 02:02:30',
        updatedAt: '20/12/2021 20:39:42',
        url: 'https://api.disneyapi.dev/characters/2473',
        __v: 0,
      },
      {
        _id: 2474,
        films: ['Big Hero 6'],
        shortFilms: [],
        tvShows: ['Big Hero 6: The Series'],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Mrs._Frederickson',
        name: 'Mrs. Frederickson',
        imageUrl: 'https://static.wikia.nocookie.net/disney/images/4/43/Mrs._Fredrickson.png',
        createdAt: '12/04/2021 02:02:31',
        updatedAt: '20/12/2021 20:39:42',
        url: 'https://api.disneyapi.dev/characters/2474',
        __v: 0,
      },
      {
        _id: 2564,
        films: [],
        shortFilms: [],
        tvShows: ['Sofia the First'],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/King_Garrick',
        name: 'King Garrick',
        imageUrl: 'https://static.wikia.nocookie.net/disney/images/c/cd/Hugo%27s_Father.png',
        createdAt: '12/04/2021 02:03:45',
        updatedAt: '20/12/2021 20:39:43',
        url: 'https://api.disneyapi.dev/characters/2564',
        __v: 0,
      },
      {
        _id: 2575,
        films: ['National Treasure', 'National Treasure: Book of Secrets'],
        shortFilms: [],
        tvShows: [],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Patrick_Henry_Gates',
        name: 'Patrick Henry Gates',
        imageUrl: 'https://static.wikia.nocookie.net/disney/images/a/ab/Patrick_Gates.jpg',
        createdAt: '12/04/2021 02:03:53',
        updatedAt: '20/12/2021 20:39:43',
        url: 'https://api.disneyapi.dev/characters/2575',
        __v: 0,
      },
      {
        _id: 3047,
        films: [],
        shortFilms: [],
        tvShows: ["Chip 'n Dale Rescue Rangers"],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Heinrich_Von_Sugarbottom',
        name: 'Heinrich Von Sugarbottom',
        imageUrl: 'https://static.wikia.nocookie.net/disney/images/6/69/Chocolatechips.jpg',
        createdAt: '12/04/2021 02:10:35',
        updatedAt: '20/12/2021 20:39:48',
        url: 'https://api.disneyapi.dev/characters/3047',
        __v: 0,
      },
      {
        _id: 3065,
        films: ['Honey, I Blew Up the Kid'],
        shortFilms: [],
        tvShows: [],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Dr._Charles_Hendrickson',
        name: 'Dr. Charles Hendrickson',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/3/3b/Dr._Charles_Hendrickson.jpg',
        createdAt: '12/04/2021 02:10:49',
        updatedAt: '20/12/2021 20:39:48',
        url: 'https://api.disneyapi.dev/characters/3065',
        __v: 0,
      },
      {
        _id: 3474,
        films: ['A Far Off Place'],
        shortFilms: [],
        tvShows: [],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/John_Ricketts',
        name: 'John Ricketts',
        imageUrl: 'https://static.wikia.nocookie.net/disney/images/3/34/John_Ricketts.PNG',
        createdAt: '12/04/2021 02:16:29',
        updatedAt: '20/12/2021 20:39:52',
        url: 'https://api.disneyapi.dev/characters/3474',
        __v: 0,
      },
      {
        _id: 3501,
        films: ['Sky High'],
        shortFilms: [],
        tvShows: [],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Jonathan_Boy',
        name: 'All American Boy',
        imageUrl: 'https://static.wikia.nocookie.net/disney/images/8/86/Mr_Boy.jpg',
        createdAt: '12/04/2021 02:16:52',
        updatedAt: '20/12/2021 20:39:52',
        url: 'https://api.disneyapi.dev/characters/3501',
        __v: 0,
      },
      {
        _id: 3697,
        films: ['Honey, We Shrunk Ourselves'],
        shortFilms: [],
        tvShows: [],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Ricky_King',
        name: 'Ricky King',
        imageUrl: 'https://static.wikia.nocookie.net/disney/images/6/6c/Ricky_King_2.jpg',
        createdAt: '12/04/2021 02:19:34',
        updatedAt: '20/12/2021 20:39:54',
        url: 'https://api.disneyapi.dev/characters/3697',
        __v: 0,
      },
      {
        _id: 3854,
        films: [],
        shortFilms: [],
        tvShows: ['Jake and the Never Land Pirates'],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Beatrice_Le_Beak',
        name: 'Beatrice Le Beak',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/e/e7/Beatrice_Le_Beak-Pirate_Pals.jpg',
        createdAt: '12/04/2021 02:21:41',
        updatedAt: '20/12/2021 20:39:56',
        url: 'https://api.disneyapi.dev/characters/3854',
        __v: 0,
      },
      {
        _id: 4085,
        films: [],
        shortFilms: [],
        tvShows: ['W.I.T.C.H. (TV series)'],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Eric_Lyndon',
        name: 'Eric Lyndon',
        imageUrl: 'https://static.wikia.nocookie.net/disney/images/3/3e/Eric_Artwork.jpg',
        createdAt: '12/04/2021 02:24:52',
        updatedAt: '20/12/2021 20:39:58',
        url: 'https://api.disneyapi.dev/characters/4085',
        __v: 0,
      },
      {
        _id: 4281,
        films: [],
        shortFilms: [],
        tvShows: ['K.C. Undercover'],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Richard_Martin',
        name: 'Richard Martin',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/8/8a/Screenshot_2016-09-15_at_11.20.26_AM.png',
        createdAt: '12/04/2021 02:27:27',
        updatedAt: '20/12/2021 20:40:00',
        url: 'https://api.disneyapi.dev/characters/4281',
        __v: 0,
      },
      {
        _id: 4285,
        films: [],
        shortFilms: [],
        tvShows: ['Cory in the House', 'Hannah Montana'],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/President_Richard_Martinez',
        name: 'Richard Martinez',
        imageUrl: 'https://static.wikia.nocookie.net/disney/images/f/f5/1Richard.jpg',
        createdAt: '12/04/2021 02:27:30',
        updatedAt: '20/12/2021 20:40:00',
        url: 'https://api.disneyapi.dev/characters/4285',
        __v: 0,
      },
      {
        _id: 4327,
        films: [
          'Beauty and the Beast (1991 film)',
          'Beauty and the Beast: The Enchanted Christmas',
          'Beauty and the Beast (2017 film)',
        ],
        shortFilms: [],
        tvShows: ['House of Mouse', 'Sing Me a Story with Belle', 'Once Upon a Time'],
        videoGames: [
          'disney:Hidden Worlds',
          'Kingdom Hearts χ',
          'Kingdom Hearts Unchained χ',
          'Disney Enchanted Tales (game)',
          'Disney Magic Kingdoms',
          "Disney Sorcerer's Arena",
        ],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Maurice',
        name: 'Maurice',
        imageUrl: 'https://static.wikia.nocookie.net/disney/images/a/a0/Maurice_BATB.jpg',
        createdAt: '12/04/2021 02:28:02',
        updatedAt: '20/12/2021 20:40:00',
        url: 'https://api.disneyapi.dev/characters/4327',
        __v: 0,
      },
      {
        _id: 4328,
        films: [],
        shortFilms: [],
        tvShows: ['Marsupilami (TV series)'],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Maurice_(Marsupilami)',
        name: 'Maurice',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/e/e4/The_Disney_Afternoon_Promotional_Image_Maurice_with_Marsupilami.png',
        createdAt: '12/04/2021 02:28:03',
        updatedAt: '20/12/2021 20:40:00',
        url: 'https://api.disneyapi.dev/characters/4328',
        __v: 0,
      },
      {
        _id: 4329,
        films: [],
        shortFilms: [],
        tvShows: [],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Maurice_Mattressface',
        name: 'Maurice Mattressface',
        imageUrl: 'https://static.wikia.nocookie.net/disney/images/e/ef/Mattressface.jpg',
        createdAt: '12/04/2021 02:28:04',
        updatedAt: '20/12/2021 20:40:00',
        url: 'https://api.disneyapi.dev/characters/4329',
        __v: 0,
      },
      {
        _id: 4404,
        films: ['The Parent Trap'],
        shortFilms: [],
        tvShows: [],
        videoGames: [],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: 'https://disney.fandom.com/wiki/Charles_McKendrick',
        name: 'Charles McKendrick',
        imageUrl: 'https://static.wikia.nocookie.net/disney/images/a/aa/CharlesMcKendrick.jpg',
        createdAt: '12/04/2021 02:29:02',
        updatedAt: '20/12/2021 20:40:01',
        url: 'https://api.disneyapi.dev/characters/4404',
        __v: 0,
      },
    ],
    selectedCharacter: {
      _id: 1525,
      films: [
        'Pinocchio (film)',
        'Fun and Fancy Free',
        'Who Framed Roger Rabbit',
        "Mickey's Magical Christmas: Snowed in at the House of Mouse",
        "Jiminy Cricket's Christmas",
        "Teacher's Pet (film)",
      ],
      shortFilms: [],
      tvShows: [
        'Walt Disney anthology series',
        'The Mickey Mouse Club',
        'Bonkers',
        'House of Mouse',
        'A Poem Is...',
        'Once Upon a Time',
      ],
      videoGames: [
        'Pinocchio (video game)',
        "Disney's Villains' Revenge",
        'Walt Disney World Quest: Magical Racing Tour',
        'Kingdom Hearts (series)',
        'Epic Mickey: Power of Illusion',
        'Disney Infinity (series)',
        'Disney Tsum Tsum (game)',
        'Disney Emoji Blitz',
      ],
      parkAttractions: [
        "Pinocchio's Daring Journey",
        'Fantasmic!',
        'Wishes: A Magical Gathering of Disney Dreams',
        "Walt Disney's Parade of Dreams",
        'SpectroMagic',
        'A Christmas Fantasy Parade',
        'Festival of Fantasy Parade',
        "Mickey's Once Upon a Christmastime Parade",
        'Jubilation!',
        'Mickey and the Magical Map',
        'Celebrate A Dreams Come True Parade',
      ],
      allies: [],
      enemies: [],
      sourceUrl: 'https://disney.fandom.com/wiki/Jiminy_Cricket',
      name: 'Jiminy Cricket',
      imageUrl:
        'https://static.wikia.nocookie.net/disney/images/f/f0/Profile_-_Jiminy_Cricket.jpeg',
      createdAt: '12/04/2021 01:48:44',
      updatedAt: '20/12/2021 20:39:32',
      url: 'https://api.disneyapi.dev/characters/1525',
      __v: 0,
    },
    isLoading: false,
    isSuccess: true,
    isError: false,
    errorMessage: '',
  },
};

export const loadingAppState = {
  ...defaultAppState,
  character: {
    ...defaultAppState.character,
    isLoading: true,
  },
};

export const errorAppState = {
  ...defaultAppState,
  character: {
    ...defaultAppState.character,
    isError: true,
    errorMessage: 'An Error occured with a disney character',
  },
};

const mockStore = configureStore(getDefaultMiddleware());
const store = (appState = {}): MockStore => mockStore({ ...defaultAppState, ...appState });

export const loadingAppStore = (appState = {}): MockStore =>
  mockStore({ ...loadingAppState, ...appState });

export const errorAppStore = (appState = {}): MockStore =>
  mockStore({ ...errorAppState, ...appState });

export default store;
