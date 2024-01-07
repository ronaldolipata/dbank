import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'checkBalance' : ActorMethod<[], number>,
  'compound' : ActorMethod<[], undefined>,
  'deposit' : ActorMethod<[number], undefined>,
  'withdraw' : ActorMethod<[number], undefined>,
}
