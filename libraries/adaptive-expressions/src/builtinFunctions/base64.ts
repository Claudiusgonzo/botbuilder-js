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
 * Return the base64-encoded version of a string or byte array.
 */
export class Base64 extends ExpressionEvaluator {
<<<<<<< HEAD
    public constructor(){
=======
    public constructor() {
>>>>>>> master
        super(ExpressionType.Base64, Base64.evaluator(), ReturnType.String, FunctionUtils.validateUnary);
    }

    private static evaluator(): EvaluateExpressionDelegate {
        return FunctionUtils.apply(
            (args: Readonly<any>): string | Uint8Array => {
                let result: string;
                if (typeof args[0] === 'string') {
                    result = Buffer.from(args[0]).toString('base64');
                }

                if (args[0] instanceof Uint8Array) {
                    result = Buffer.from(args[0]).toString('base64');
                }
                return result;
            });
    }
}