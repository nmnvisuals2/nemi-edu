export default function CW({ condition, children, wrapper = (x) => x }) {
    return condition == true ? wrapper(children) : children;
  }
  