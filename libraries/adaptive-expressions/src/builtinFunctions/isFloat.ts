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

/**
 * Return true if a given input is a floating-point number.
 * Due to the alignment between C#and JavaScript, a number with an non-zero residue of its modulo 1 will be treated as a floating-point number.
 */
export class IsFloat extends ExpressionEvaluator {
    public constructor(){
=======
import { EvaluateExpressionDelegate, ExpressionEvaluator } from '../expressionEvaluator';
import { ExpressionType } from '../expressionType';
import { FunctionUtils } from '../functionUtils';
import { ReturnType } from '../returnType';

/**
 * Return true if a given input is a floating-point number.
 * Due to the alignment between C# and JavaScript, a number with an non-zero residue of its modulo 1 will be treated as a floating-point number.
 */
export class IsFloat extends ExpressionEvaluator {
    public constructor() {
>>>>>>> master
        super(ExpressionType.IsFloat, IsFloat.evaluator(), ReturnType.Boolean, FunctionUtils.validateUnary);
    }

    private static evaluator(): EvaluateExpressionDelegate {
        return FunctionUtils.apply(
            (args: any[]): boolean => FunctionUtils.isNumber(args[0]) && !Number.isInteger(args[0]));
    }
}