export const ContractABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "songId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "songcover",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "song",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "songName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "songArtist",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "genre",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "releaseDate",
        type: "string",
      },
    ],
    name: "UpdateSong",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "songId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "songcover",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "song",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "songName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "songArtist",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "genre",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "releaseDate",
        type: "string",
      },
    ],
    name: "UploadSong",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getSong",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "songId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "songcover",
            type: "string",
          },
          {
            internalType: "string",
            name: "song",
            type: "string",
          },
          {
            internalType: "string",
            name: "songName",
            type: "string",
          },
          {
            internalType: "address",
            name: "songArtist",
            type: "address",
          },
          {
            internalType: "string",
            name: "genre",
            type: "string",
          },
          {
            internalType: "string",
            name: "releaseDate",
            type: "string",
          },
        ],
        internalType: "struct MusicApp.Song",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSongs",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "songId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "songcover",
            type: "string",
          },
          {
            internalType: "string",
            name: "song",
            type: "string",
          },
          {
            internalType: "string",
            name: "songName",
            type: "string",
          },
          {
            internalType: "address",
            name: "songArtist",
            type: "address",
          },
          {
            internalType: "string",
            name: "genre",
            type: "string",
          },
          {
            internalType: "string",
            name: "releaseDate",
            type: "string",
          },
        ],
        internalType: "struct MusicApp.Song[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_songcover",
        type: "string",
      },
      {
        internalType: "string",
        name: "_song",
        type: "string",
      },
      {
        internalType: "string",
        name: "_songname",
        type: "string",
      },
      {
        internalType: "string",
        name: "_genre",
        type: "string",
      },
      {
        internalType: "string",
        name: "_releaseDate",
        type: "string",
      },
    ],
    name: "updateSong",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_songcover",
        type: "string",
      },
      {
        internalType: "string",
        name: "_song",
        type: "string",
      },
      {
        internalType: "string",
        name: "_songname",
        type: "string",
      },
      {
        internalType: "string",
        name: "_genre",
        type: "string",
      },
      {
        internalType: "string",
        name: "_releaseDate",
        type: "string",
      },
    ],
    name: "uploadSong",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];