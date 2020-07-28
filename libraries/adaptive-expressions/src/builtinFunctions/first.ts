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
=======
import { EvaluateExpressionDelegate, ExpressionEvaluator } from '../expressionEvaluator';
import { ExpressionType } from '../expressionType';
import { FunctionUtils } from '../functionUtils';
import { ReturnType } from '../returnType';
>>>>>>> master

/**
 * Return the first item from a string or array.
 */
export class First extends ExpressionEvaluator {
<<<<<<< HEAD
    public constructor(){
=======
    public constructor() {
>>>>>>> master
        super(ExpressionType.First, First.evaluator(), ReturnType.Object, FunctionUtils.validateUnary);
    }

    private static evaluator(): EvaluateExpressionDelegate {
        return FunctionUtils.apply(
            (args: any[]): any => {
                let first: any;
                if (typeof args[0] === 'string' && args[0].length > 0) {
                    first = args[0][0];
                }

                if (Array.isArray(args[0]) && args[0].length > 0) {
                    first = FunctionUtils.accessIndex(args[0], 0).value;
                }

                return first;
            });
    }
}