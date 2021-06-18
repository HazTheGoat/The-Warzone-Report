import { CardType } from "../types/types";

export const getRank = (kd: any) => {
  switch (true) {
    case kd < CardType.iron:
      return CardType[CardType.wood];

    case kd < CardType.bronze && kd > CardType.wood:
      return CardType[CardType.iron];

    case kd < CardType.silver && kd > CardType.iron:
      return CardType[CardType.bronze];

    case kd < CardType.gold && kd > CardType.bronze:
      return CardType[CardType.silver];

    case kd < CardType.platinum && kd > CardType.silver:
      return CardType[CardType.gold];

    case kd < CardType.diamond && kd > CardType.gold:
      return CardType[CardType.platinum];

    case kd < CardType.master && kd > CardType.platinum:
      return CardType[CardType.diamond];

    case kd < CardType.challenger && kd > CardType.diamond:
      return CardType[CardType.master];

    case kd < CardType.god && kd > CardType.master:
      return CardType[CardType.challenger];

    case kd > CardType.god:
      return CardType[CardType.god];

    default:
      return CardType[CardType.gold];
  }
};
