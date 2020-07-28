/**
 * @module adaptive-expressions
 */
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

<<<<<<< HEAD
import { ReturnType } from '../returnType';
import { FunctionUtils } from '../functionUtils';
import { EvaluateExpressionDelegate, ExpressionEvaluator } from '../expressionEvaluator';
=======
import { EvaluateExpressionDelegate, ExpressionEvaluator } from '../expressionEvaluator';
import { FunctionUtils } from '../functionUtils';
import { ReturnType } from '../returnType';
>>>>>>> master

/**
 * Numeric operators that can have 1 or more args.
 */
export class NumericEvaluator extends ExpressionEvaluator {
    public constructor(type: string, func: (args: any[]) => any) {
        super(type, NumericEvaluator.evaluator(func), ReturnType.Number, FunctionUtils.validateNumber);
    }

    private static evaluator(func: (args: any[]) => any): EvaluateExpressionDelegate {
        return FunctionUtils.applySequence(func, FunctionUtils.verifyNumber);
    }
}