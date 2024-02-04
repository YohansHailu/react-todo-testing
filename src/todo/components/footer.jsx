import { useCallback, useMemo } from "react";
import { useLocation } from "react-router-dom";
import classnames from "classnames";
import { Link } from "react-router-dom";

import { REMOVE_COMPLETED_ITEMS } from "../constants";

export function Footer({ todos, dispatch }) {
  const { pathname: route } = useLocation();

  const activeTodos = useMemo(() => todos.filter((todo) => !todo.completed), [todos]);

  const removeCompleted = useCallback(() => dispatch({ type: REMOVE_COMPLETED_ITEMS }), [dispatch]);

  // prettier-ignore
  if (todos.length === 0)
    return null;

  return (
    <footer className="footer" data-testid="footer">
      <span className="todo-count">{`${activeTodos.length} ${activeTodos.length === 1 ? "item" : "items"} left!`}</span>
      <ul className="filters" data-testid="footer-navigation">
        <li>
          <Link className={classnames({ selected: route === "/" })} to="/">
            All
          </Link>
        </li>
        <li>
          <Link className={classnames({ selected: route === "/active" })} to="/active">
            Active
          </Link>
        </li>
        <li>
          <Link className={classnames({ selected: route === "/completed" })} to="/completed">
            Completed
          </Link>
        </li>
      </ul>
      <button className="clear-completed" disabled={activeTodos.length === todos.length} onClick={removeCompleted}>
        Clear completed
      </button>

    </footer>
  );
}
