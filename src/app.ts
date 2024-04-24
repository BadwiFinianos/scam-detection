import 'module-alias/register';

import { PubValidationService } from '@services/pubValidationService';
import { Pub, ScamResponse } from '@customTypes/index';

import pub1 from './data/pub1.json';

async function checkPubValidation(pub: Pub): Promise<ScamResponse> {
  return await PubValidationService.validatePub(pub);
}

checkPubValidation(pub1).then((value) => console.log(value));
