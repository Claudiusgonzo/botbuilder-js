/**
 * @module adaptive-expressions
 */
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

<<<<<<< HEAD
import { ExpressionEvaluator, EvaluateExpressionDelegate } from '../expressionEvaluator';
import { ReturnType } from '../returnType';
import { ExpressionType } from '../expressionType';
import { FunctionUtils } from '../functionUtils';
import moment from 'moment';
=======
import moment from 'moment';

import { EvaluateExpressionDelegate, ExpressionEvaluator } from '../expressionEvaluator';
import { ExpressionType } from '../expressionType';
import { FunctionUtils } from '../functionUtils';
import { ReturnType } from '../returnType';
>>>>>>> master

/**
 * Return the date of a specified timestamp in m/dd/yyyy format.
 */
export class DateFunc extends ExpressionEvaluator {
<<<<<<< HEAD
    public constructor(){
=======
    public constructor() {
>>>>>>> master
        super(ExpressionType.Date, DateFunc.evaluator(), ReturnType.String, FunctionUtils.validateUnaryString);
    }

    private static evaluator(): EvaluateExpressionDelegate {
        return FunctionUtils.applyWithError(
            (args: any[]): any => FunctionUtils.parseTimestamp(args[0], (timestamp: Date): string => moment(timestamp).utc().format('M/DD/YYYY')),
            FunctionUtils.verifyString);
    }
}