/* tslint:disable */
/* eslint-disable */
/**
 * eventportal-backend
 * Eventportal API Spec
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: mizphses@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { EventSpeechProposalReturnItem } from './EventSpeechProposalReturnItem';
import {
    EventSpeechProposalReturnItemFromJSON,
    EventSpeechProposalReturnItemFromJSONTyped,
    EventSpeechProposalReturnItemToJSON,
} from './EventSpeechProposalReturnItem';

/**
 * 
 * @export
 * @interface EventSpeechProposalReturn
 */
export interface EventSpeechProposalReturn {
    /**
     * 申し込みのステータス
     * @type {string}
     * @memberof EventSpeechProposalReturn
     */
    status?: string;
    /**
     * 
     * @type {EventSpeechProposalReturnItem}
     * @memberof EventSpeechProposalReturn
     */
    item?: EventSpeechProposalReturnItem;
}

/**
 * Check if a given object implements the EventSpeechProposalReturn interface.
 */
export function instanceOfEventSpeechProposalReturn(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EventSpeechProposalReturnFromJSON(json: any): EventSpeechProposalReturn {
    return EventSpeechProposalReturnFromJSONTyped(json, false);
}

export function EventSpeechProposalReturnFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventSpeechProposalReturn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'item': !exists(json, 'item') ? undefined : EventSpeechProposalReturnItemFromJSON(json['item']),
    };
}

export function EventSpeechProposalReturnToJSON(value?: EventSpeechProposalReturn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'item': EventSpeechProposalReturnItemToJSON(value.item),
    };
}

