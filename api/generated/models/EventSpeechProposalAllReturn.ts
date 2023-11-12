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
 * @interface EventSpeechProposalAllReturn
 */
export interface EventSpeechProposalAllReturn {
    /**
     * 申し込みのステータス
     * @type {string}
     * @memberof EventSpeechProposalAllReturn
     */
    status?: string;
    /**
     * 申し込みの内容
     * @type {Array<EventSpeechProposalReturnItem>}
     * @memberof EventSpeechProposalAllReturn
     */
    item?: Array<EventSpeechProposalReturnItem>;
}

/**
 * Check if a given object implements the EventSpeechProposalAllReturn interface.
 */
export function instanceOfEventSpeechProposalAllReturn(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EventSpeechProposalAllReturnFromJSON(json: any): EventSpeechProposalAllReturn {
    return EventSpeechProposalAllReturnFromJSONTyped(json, false);
}

export function EventSpeechProposalAllReturnFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventSpeechProposalAllReturn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'item': !exists(json, 'item') ? undefined : ((json['item'] as Array<any>).map(EventSpeechProposalReturnItemFromJSON)),
    };
}

export function EventSpeechProposalAllReturnToJSON(value?: EventSpeechProposalAllReturn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'item': value.item === undefined ? undefined : ((value.item as Array<any>).map(EventSpeechProposalReturnItemToJSON)),
    };
}

