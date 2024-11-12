import type { ScalingAlgo } from "./scaling";

export interface TransformParams {
    scaleX: number;
    scaleY: number;
    scaleDownAlgo: ScalingAlgo;
    scaleUpAlgo: ScalingAlgo;
}