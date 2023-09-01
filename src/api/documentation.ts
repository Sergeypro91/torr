/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/api/test": {
    /** Тестовая ручка */
    get: operations["TestController_checkIn"];
  };
  "/api/image/{imageSize}/{imageName}": {
    /** Получение трендов фильмов/сериалов */
    get: operations["ImageController_getImage"];
  };
  "/api/auth/sign-up": {
    /** Регистрация пользователя */
    post: operations["AuthController_signUp"];
  };
  "/api/auth/sign-in": {
    /** Сессионная авторизация пользователя */
    post: operations["AuthController_signIn"];
  };
  "/api/auth/logout": {
    /** Удаление сессии пользователя */
    get: operations["AuthController_logout"];
  };
  "/api/auth/check-in": {
    /** Проверка активной сессии пользователя */
    get: operations["AuthController_checkIn"];
  };
  "/api/auth/sign-in-jwt": {
    /** JWT авторизация пользователя */
    post: operations["AuthController_loginUserByJwt"];
  };
  "/api/user": {
    /** Получение данных пользователя */
    get: operations["UserController_getUser"];
    /** Редактирование данных пользователя */
    put: operations["UserController_editUser"];
    /** Получение данных о пользователях */
    post: operations["UserController_getUsers"];
    /** Удаление пользователей */
    delete: operations["UserController_deleteUser"];
  };
  "/api/file": {
    /** Загрузка файлов на сервер */
    post: operations["MinIOController_uploadFile"];
    /** Удаление файлов с сервера */
    delete: operations["MinIOController_deleteFile"];
  };
  "/api/parser/parse": {
    /** Парсинг торрентов по фильму/сериалу из запроса */
    get: operations["ParserController_parseTorrents"];
  };
  "/api/parser": {
    /** Получение торрент файлов по заданному запросу */
    get: operations["ParserController_getPictureTorrents"];
  };
  "/api/person/{tmdbId}": {
    /** Получение данных по Личности */
    get: operations["PersonController_getPersonData"];
  };
  "/api/picture": {
    /** Поиск фильма/сериала по запросу */
    get: operations["PictureController_search"];
  };
  "/api/picture/{tmdbId}/{mediaType}": {
    /** Получение даных о фильме/сериале */
    get: operations["PictureController_getPictureData"];
  };
  "/api/picture/trends/{mediaType}/{timeWindow}": {
    /** Получение трендов фильмов/сериалов */
    get: operations["PictureController_getPictureTrends"];
  };
  "/api/picture/network/{mediaType}/{network}": {
    /** Получение фильмов/сериалов определенной компании */
    get: operations["PictureController_getNetworkPictures"];
  };
  "/api/picture/recent-viewed": {
    /** Получение перечня недавно просматриваемых фильмов/сериалов */
    get: operations["PictureController_getRecentViewedPictures"];
  };
  "/api/preview": {
    /** JSON объект трендов Фильмов/Сериалов для Samsung PublicPreview */
    get: operations["PublicPreviewController_getPreview"];
  };
  "/api/webtorrent": {
    /** Получение информации о торрент файле */
    get: operations["WebtorrentController_getTorrentInfo"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    ErrorDto: {
      statusCode: number;
      message: string;
      error?: string;
    };
    RecentViewDto: {
      tmdbId: string;
      /** @enum {string} */
      mediaType: "all" | "movie" | "tv" | "person";
    };
    UserDto: {
      password: string;
      email: string;
      nickname?: string;
      firstName?: string;
      lastName?: string;
      tgId?: number;
      image?: string;
      recentViews?: (components["schemas"]["RecentViewDto"])[];
      /** @enum {string} */
      role?: "admin" | "guest" | "member" | "premium" | "blocked";
    };
    DBUserDto: {
      email: string;
      passwordHash: string;
      nickname?: string;
      firstName?: string;
      lastName?: string;
      tgId?: number;
      /** @enum {string} */
      role: "admin" | "guest" | "member" | "premium" | "blocked";
      image?: string;
      recentViews?: (components["schemas"]["RecentViewDto"])[];
    };
    LoginUserDto: Record<string, never>;
    UserSessionDto: {
      email: string;
      tgId?: number;
      /** @enum {string} */
      role: "admin" | "guest" | "member" | "premium" | "blocked";
    };
    LogoutUserDto: Record<string, never>;
    UsersEmailDto: {
      users: (string)[];
    };
    EditUserDto: {
      email: string;
      nickname?: string;
      firstName?: string;
      lastName?: string;
      tgId?: number;
      /** @enum {string} */
      role?: "admin" | "guest" | "member" | "premium" | "blocked";
      image?: string;
      recentViews?: (components["schemas"]["RecentViewDto"])[];
    };
    UserEmailDto: Record<string, never>;
    FileUrlDto: Record<string, never>;
    DeletedFileDto: Record<string, never>;
    DeletingConfirmDto: Record<string, never>;
    GetTorrentsDto: Record<string, never>;
    TrackerDto: Record<string, never>;
    TorrentInfoDto: {
      searchQuery: string;
      /** @enum {string} */
      searchStatus: "created" | "updating" | "finished" | "warning" | "error";
      trackers: (components["schemas"]["TrackerDto"])[];
    };
    PersonDetailDataDto: Record<string, never>;
    MovieSlim: {
      tmdbId: string;
      mediaType: string;
      posterPath: string | null;
      hPosterPath: string | null;
      backdropPath: string | null;
      title: string;
      originalTitle: string;
      overview: string | null;
      genres: (number)[];
      releaseDate: string;
      popularity: number;
      voteAverage: number;
      trailer: string | null;
    };
    TvSlim: {
      tmdbId: string;
      mediaType: string;
      posterPath: string | null;
      hPosterPath: string | null;
      backdropPath: string | null;
      title: string;
      originalTitle: string;
      overview: string;
      genres: (number)[];
      releaseDate: string;
      popularity: number;
      voteAverage: number;
      trailer: string | null;
    };
    PersonSlim: {
      tmdbId: string;
      mediaType: string;
      name: string;
      profilePath: string | null;
      popularity: number;
    };
    SearchResultDto: {
      page: number;
      totalPages: number;
      totalResults: number;
      results: (components["schemas"]["MovieSlim"] | components["schemas"]["TvSlim"] | components["schemas"]["PersonSlim"])[];
    };
    GenresDto: {
      id: number;
      name: string;
    };
    CompanyDto: {
      id: number;
      name: string;
      logoPath: string | null;
    };
    VideoDto: {
      iso?: string;
      name: string;
      key: string;
      site: string;
      size: number;
      type: string;
      official: boolean;
      publishedAt: string;
    };
    ResultsVideoObjDto: {
      results: (components["schemas"]["VideoDto"])[];
    };
    ParticipantPersonDto: {
      tmdbId: number;
      department: string;
      job: string | null;
      name: string;
      originalName: string;
      character: string | null;
      popularity: number;
      profilePath: string | null;
    };
    CreditsDto: {
      cast: (components["schemas"]["ParticipantPersonDto"])[];
      crew: (components["schemas"]["ParticipantPersonDto"])[];
    };
    ImageDto: {
      aspectRatio: number;
      filePath: string;
      height: number;
      iso: string | null;
      voteAverage: number;
      width: number;
    };
    ImagesDto: {
      backdrops: (components["schemas"]["ImageDto"])[];
      logos: (components["schemas"]["ImageDto"])[];
      posters: (components["schemas"]["ImageDto"])[];
    };
    MovieDto: {
      backdropPath: string | null;
      budget: number;
      genres: (components["schemas"]["GenresDto"])[];
      originalTitle: string;
      overview: string | null;
      popularity: number;
      posterPath: string | null;
      production: (components["schemas"]["CompanyDto"])[];
      releaseDate: string;
      revenue: number;
      runtime: number | null;
      /** @enum {string} */
      status: "Rumored" | "Planned" | "In Production" | "Post Production" | "Released" | "Canceled";
      tagline: string | null;
      title: string;
      voteAverage: number;
      videos: components["schemas"]["ResultsVideoObjDto"];
      credits: components["schemas"]["CreditsDto"];
      images: components["schemas"]["ImagesDto"];
    };
    GetPictureResponseDto: {
      tmdbId: string;
      imdbId?: string | null;
      /** @enum {string} */
      mediaType: "all" | "movie" | "tv" | "person";
      pictureData: components["schemas"]["MovieDto"];
    };
    GetPictureTrendsResponseDto: {
      page: number;
      totalPages: number;
      totalResults: number;
      results: (components["schemas"]["MovieSlim"] | components["schemas"]["TvSlim"] | components["schemas"]["PersonSlim"])[];
    };
    GetNetworkPicturesResponseDto: {
      page: number;
      totalPages: number;
      totalResults: number;
      results: (components["schemas"]["MovieSlim"] | components["schemas"]["TvSlim"])[];
    };
    GetPreviewResultDto: Record<string, never>;
    GetTorrentDistributionInfoRequestDto: {
      tmdbId: string;
      imdbId?: string | null;
      /** @enum {string} */
      mediaType: "all" | "movie" | "tv" | "person";
    };
    GetTorrentDistributionInfoResponseDto: Record<string, never>;
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export interface operations {

  /** Тестовая ручка */
  TestController_checkIn: {
    responses: {
      200: {
        content: {
          "application/json": string;
        };
      };
      401: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
    };
  };
  /** Получение трендов фильмов/сериалов */
  ImageController_getImage: {
    parameters: {
      path: {
        imageSize: string;
        imageName: string;
      };
    };
    responses: {
      200: never;
    };
  };
  /** Регистрация пользователя */
  AuthController_signUp: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["UserDto"];
      };
    };
    responses: {
      201: {
        content: {
          "application/json": components["schemas"]["DBUserDto"];
        };
      };
      400: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
      500: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
    };
  };
  /** Сессионная авторизация пользователя */
  AuthController_signIn: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["LoginUserDto"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["UserSessionDto"];
        };
      };
      400: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
      401: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
    };
  };
  /** Удаление сессии пользователя */
  AuthController_logout: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["LogoutUserDto"];
        };
      };
      401: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
    };
  };
  /** Проверка активной сессии пользователя */
  AuthController_checkIn: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["UserSessionDto"];
        };
      };
      401: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
    };
  };
  /** JWT авторизация пользователя */
  AuthController_loginUserByJwt: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["LoginUserDto"];
      };
    };
    responses: {
      200: never;
      400: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
      401: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
    };
  };
  /** Получение данных пользователя */
  UserController_getUser: {
    responses: {
      200: {
        content: {
          "application/json": (components["schemas"]["DBUserDto"])[];
        };
      };
      401: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
    };
  };
  /** Редактирование данных пользователя */
  UserController_editUser: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["EditUserDto"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": (components["schemas"]["DBUserDto"])[];
        };
      };
      400: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
      401: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
    };
  };
  /** Получение данных о пользователях */
  UserController_getUsers: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["UsersEmailDto"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": (components["schemas"]["DBUserDto"])[];
        };
      };
      400: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
      401: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
      403: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
    };
  };
  /** Удаление пользователей */
  UserController_deleteUser: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["UserEmailDto"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["DBUserDto"];
        };
      };
      400: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
      401: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
      403: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
    };
  };
  /** Загрузка файлов на сервер */
  MinIOController_uploadFile: {
    requestBody: {
      content: {
        "multipart/form-data": {
          /** Format: binary */
          file?: string;
        };
      };
    };
    responses: {
      201: {
        content: {
          "application/json": components["schemas"]["FileUrlDto"];
        };
      };
      400: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
      500: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
    };
  };
  /** Удаление файлов с сервера */
  MinIOController_deleteFile: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["DeletedFileDto"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["DeletingConfirmDto"];
        };
      };
      404: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
    };
  };
  /** Парсинг торрентов по фильму/сериалу из запроса */
  ParserController_parseTorrents: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["GetTorrentsDto"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["TorrentInfoDto"];
        };
      };
      400: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
      401: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
      404: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
    };
  };
  /** Получение торрент файлов по заданному запросу */
  ParserController_getPictureTorrents: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["GetTorrentsDto"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": (components["schemas"]["TrackerDto"])[];
        };
      };
      400: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
      401: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
      404: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
    };
  };
  /** Получение данных по Личности */
  PersonController_getPersonData: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["PersonDetailDataDto"];
        };
      };
      400: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
      401: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
      404: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
    };
  };
  /** Поиск фильма/сериала по запросу */
  PictureController_search: {
    parameters: {
      query: {
        query: string;
        mediaType: "all" | "movie" | "tv" | "person";
        page?: number;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["SearchResultDto"];
        };
      };
      400: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
      401: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
      404: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
    };
  };
  /** Получение даных о фильме/сериале */
  PictureController_getPictureData: {
    parameters: {
      query?: {
        imdbId?: string | null;
        /** @description May contain additional data in the request - "videos,images,credits" */
        appends?: string;
      };
      path: {
        tmdbId: string;
        mediaType: "all" | "movie" | "tv" | "person";
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["GetPictureResponseDto"];
        };
      };
      400: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
      401: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
      404: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
    };
  };
  /** Получение трендов фильмов/сериалов */
  PictureController_getPictureTrends: {
    parameters: {
      query?: {
        page?: number;
      };
      path: {
        mediaType: "all" | "movie" | "tv" | "person";
        timeWindow: "day" | "week";
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["GetPictureTrendsResponseDto"];
        };
      };
      400: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
      401: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
      404: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
    };
  };
  /** Получение фильмов/сериалов определенной компании */
  PictureController_getNetworkPictures: {
    parameters: {
      query?: {
        page?: number;
      };
      path: {
        mediaType: "all" | "movie" | "tv" | "person";
        network: number;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["GetNetworkPicturesResponseDto"];
        };
      };
      400: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
      401: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
      404: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
    };
  };
  /** Получение перечня недавно просматриваемых фильмов/сериалов */
  PictureController_getRecentViewedPictures: {
    responses: {
      200: {
        content: {
          "application/json": (components["schemas"]["GetPictureResponseDto"])[];
        };
      };
      400: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
      401: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
      404: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
    };
  };
  /** JSON объект трендов Фильмов/Сериалов для Samsung PublicPreview */
  PublicPreviewController_getPreview: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["GetPreviewResultDto"];
        };
      };
      400: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
      401: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
      404: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
    };
  };
  /** Получение информации о торрент файле */
  WebtorrentController_getTorrentInfo: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["GetTorrentDistributionInfoRequestDto"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["GetTorrentDistributionInfoResponseDto"];
        };
      };
      400: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
      401: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
      404: {
        content: {
          "application/json": components["schemas"]["ErrorDto"];
        };
      };
    };
  };
}
