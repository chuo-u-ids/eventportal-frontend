/* tslint:disable */

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

import * as runtime from '../runtime'
import type { WorkingTest } from '../models/index'
import { WorkingTestFromJSON, WorkingTestToJSON } from '../models/index'

/**
 *
 */
export class TestApi extends runtime.BaseAPI {
  /**
   * APIの動作確認用のエンドポイントです。
   */
  async workingTestRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<WorkingTest>> {
    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request(
      {
        path: `/api_work_test`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      WorkingTestFromJSON(jsonValue)
    )
  }

  /**
   * APIの動作確認用のエンドポイントです。
   */
  async workingTest(
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<WorkingTest> {
    const response = await this.workingTestRaw(initOverrides)
    return await response.value()
  }
}
