/* eslint-disable @typescript-eslint/no-unused-vars */
import { shallowEquals } from "../equalities";
import { FunctionComponent } from "react";
import { useRef } from "../hooks";

export function memo<P extends object>(
  Component: FunctionComponent<P>,
  equals = shallowEquals,
) {
  return function MemoizedComponent(props: P) {
    const previous = useRef<{ props: P; result: React.ReactElement } | null>(
      null,
    );

    // 1. 이전 값이 있고, props가 같다면 캐시된 결과 반환
    if (previous.current && equals(previous.current.props, props)) {
      return previous.current.result;
    }

    // 2. 아니면 새로 렌더해서 결과 저장
    const result = Component(props) as React.ReactElement;
    previous.current = { props, result };
    return result;
  };
}
