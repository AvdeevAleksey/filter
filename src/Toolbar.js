import React from "react";

function Toolbar({filters, selected, onSelectFilter}) {
    return (
        <div>
          {filters.map((item) => (
            <button
              onClick={onSelectFilter}
              key={item}
              className={item === selected ? 'active' : ''}
            >
              {item}
            </button>
          ))}
        </div>
      );
}

export default Toolbar;