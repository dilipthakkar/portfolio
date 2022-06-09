import $ from "jquery";
export const WorkCardFile = () => {
  const gridWidth = $(".work-grid").width();
  const containerHeight = $(".work-card-container").height();
  const padding = 20;
  const col = 4;
  const colWidth = gridWidth / col;
  const newContainerHeight = containerHeight + 2 * padding;
  console.log(colWidth);

  setTimeout(() => {
    $(".work-grid").each(function () {
      $(".work-card-container").each(function (i) {
        /* transform: translate(-50%, -50%); */
        $(this).css("transform", "translate(0, 0)");
        $(this).css("left", (i % col) * colWidth);
        $(this).css("width", colWidth);
        $(this).css("height", newContainerHeight);
        $(this).css("top", Math.floor(i / col) * newContainerHeight);
      });
    });
  }, 1000);
};
