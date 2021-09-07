import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type YerdyMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Yerdy {
  readonly id: string;
  readonly test?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Yerdy, YerdyMetaData>);
  static copyOf(source: Yerdy, mutator: (draft: MutableModel<Yerdy, YerdyMetaData>) => MutableModel<Yerdy, YerdyMetaData> | void): Yerdy;
}