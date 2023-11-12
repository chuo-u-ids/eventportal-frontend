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

import { exists, mapValues } from '../runtime'
/**
 * 登壇者のeメールアドレス(代表者含む)の配列
 * @export
 * @interface EventSpeechProposalSpeakersInner
 */
export interface EventSpeechProposalSpeakersInner {
  /**
   * eメールアドレス
   * @type {string}
   * @memberof EventSpeechProposalSpeakersInner
   */
  email?: string
  /**
   * 名前
   * @type {string}
   * @memberof EventSpeechProposalSpeakersInner
   */
  name?: string
}

/**
 * Check if a given object implements the EventSpeechProposalSpeakersInner interface.
 */
export function instanceOfEventSpeechProposalSpeakersInner(
  value: object
): boolean {
  let isInstance = true

  return isInstance
}

export function EventSpeechProposalSpeakersInnerFromJSON(
  json: any
): EventSpeechProposalSpeakersInner {
  return EventSpeechProposalSpeakersInnerFromJSONTyped(json, false)
}

export function EventSpeechProposalSpeakersInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EventSpeechProposalSpeakersInner {
  if (json === undefined || json === null) {
    return json
  }
  return {
    email: !exists(json, 'email') ? undefined : json['email'],
    name: !exists(json, 'name') ? undefined : json['name']
  }
}

export function EventSpeechProposalSpeakersInnerToJSON(
  value?: EventSpeechProposalSpeakersInner | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    email: value.email,
    name: value.name
  }
}
