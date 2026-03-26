type FilterType = "all" | "pending" | "completed";

type FilterBarProps = {
  currentFilter: FilterType;
  onChangeFilter: (filter: FilterType) => void;
};

function FilterBar({ currentFilter, onChangeFilter }: FilterBarProps) {
  return (
    <div className="filter-bar">
      <button
        className={currentFilter === "all" ? "active" : ""}
        onClick={() => onChangeFilter("all")}
      >
        All
      </button>

      <button
        className={currentFilter === "pending" ? "active" : ""}
        onClick={() => onChangeFilter("pending")}
      >
        Pending
      </button>

      <button
        className={currentFilter === "completed" ? "active" : ""}
        onClick={() => onChangeFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
}

export default FilterBar;