const SingleField = ({
  leftClick,
  rightClick,
  details,
  mouseDown,
  mouseUp,
}) => {
  return (
    <button
      onContextMenu={(e) => rightClick(e, details.r, details.c)}
      onClick={() => leftClick(details.r, details.c)}
      onMouseDown={() => mouseDown()}
      onMouseUp={() => mouseUp()}
    >
      <img
        src={
          details.marked
            ? details.value === 1000
              ? details.redBomb
                ? "field_bombred_pressed.jpg"
                : "field_bomb_pressed.jpg"
              : `field_${details.value}.jpg`
            : details.flagged === 2
            ? "field_questionmark.jpg"
            : details.flagged === 1
            ? "field_flag.jpg"
            : "field.jpg"
        }
        alt=""
      />
    </button>
  );
};

export default SingleField;
