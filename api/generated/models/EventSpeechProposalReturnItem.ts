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
import type { EventSpeechProposalSpeakersInner } from './EventSpeechProposalSpeakersInner'
import {
  EventSpeechProposalSpeakersInnerFromJSON,
  EventSpeechProposalSpeakersInnerFromJSONTyped,
  EventSpeechProposalSpeakersInnerToJSON
} from './EventSpeechProposalSpeakersInner'

/**
 * 申し込みの内容
 * @export
 * @interface EventSpeechProposalReturnItem
 */
export interface EventSpeechProposalReturnItem {
  /**
   * 申し込みのID
   * @type {string}
   * @memberof EventSpeechProposalReturnItem
   */
  id?: string
  /**
   * 発表形式。presentationまたはposter
   * @type {string}
   * @memberof EventSpeechProposalReturnItem
   */
  presentationType?: string
  /**
   * 発表タイトル
   * @type {string}
   * @memberof EventSpeechProposalReturnItem
   */
  title?: string
  /**
   * 登壇者情報
   * @type {Array<EventSpeechProposalSpeakersInner>}
   * @memberof EventSpeechProposalReturnItem
   */
  speakers?: Array<EventSpeechProposalSpeakersInner>
  /**
   * 発表概要
   * @type {string}
   * @memberof EventSpeechProposalReturnItem
   */
  _abstract?: string
  /**
   * 発表時間(分)
   * @type {number}
   * @memberof EventSpeechProposalReturnItem
   */
  estimatedTime?: number
  /**
   * ゼミ名または所属組織 ※運営委員としての発表の場合などはofficial, など例外があります
   * @type {string}
   * @memberof EventSpeechProposalReturnItem
   */
  seminar?: string
}

/**
 * Check if a given object implements the EventSpeechProposalReturnItem interface.
 */
export function instanceOfEventSpeechProposalReturnItem(
  value: object
): boolean {
  let isInstance = true

  return isInstance
}

export function EventSpeechProposalReturnItemFromJSON(
  json: any
): EventSpeechProposalReturnItem {
  return EventSpeechProposalReturnItemFromJSONTyped(json, false)
}

export function EventSpeechProposalReturnItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EventSpeechProposalReturnItem {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'Id') ? undefined : json['Id'],
    presentationType: !exists(json, 'presentationType')
      ? undefined
      : json['presentationType'],
    title: !exists(json, 'title') ? undefined : json['title'],
    speakers: !exists(json, 'speakers')
      ? undefined
      : (json['speakers'] as Array<any>).map(
          EventSpeechProposalSpeakersInnerFromJSON
        ),
    _abstract: !exists(json, 'abstract') ? undefined : json['abstract'],
    estimatedTime: !exists(json, 'estimated_time')
      ? undefined
      : json['estimated_time'],
    seminar: !exists(json, 'seminar') ? undefined : json['seminar']
  }
}

export function EventSpeechProposalReturnItemToJSON(
  value?: EventSpeechProposalReturnItem | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    Id: value.id,
    presentationType: value.presentationType,
    title: value.title,
    speakers:
      value.speakers === undefined
        ? undefined
        : (value.speakers as Array<any>).map(
            EventSpeechProposalSpeakersInnerToJSON
          ),
    abstract: value._abstract,
    estimated_time: value.estimatedTime,
    seminar: value.seminar
  }
}
