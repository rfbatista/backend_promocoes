const DI = {
  infrastructure: {
    logger: Symbol('logger'),
    bot: {
      csml: Symbol('csml chat provider'),
      telegram: Symbol('telegram bot layer')
    },
    datasource: {
      mongodb: Symbol('mongodb')
    }
  },

  usecases: {
    dto: Symbol('usecase dto'),
    message: {
      PublishMessage: Symbol('publish message'),
      CreateMessage: Symbol('create message'),
    },
  },
  services: {
    dto: Symbol('service dto'),
    TelegramIncomingMessage: Symbol('incoming message'),
    ChatWithBot: Symbol('chat with bot'),
    TelegramRequestService: Symbol('telegram request service')
  },
  builder: {
    messageDirector: Symbol('message director'),
    TelegramIncomingMessageBuilder: Symbol('telegram output builder'),
    TelegramIncomingCallbackQueryBuilder: Symbol('telegram callback query builder'),
    telegramRequestBuilder: Symbol('telegram request builder'),
    csmlRequestBuilder: Symbol('csml request builder'),
    csmlResponseBuilder: Symbol('csml response builder'),
  },
  domain: {
    Message: Symbol('message'),
  },
  events: {
    Register: Symbol('register'),
    MessageEmitter: Symbol('message emitter'),
  },
};

export default DI;
