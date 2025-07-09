import Cleave from "cleave.js";
import { identifyRnfArea } from "./identifyRnfArea";

export function changeValue(data, zoom, areaRnf, input, valueMinMax, type) {
  const more = areaRnf.querySelector(".more");
  const less = areaRnf.querySelector(".less");

  let value = parseInt(input.value.replace(/\s/g, ""));

  const valueMax = valueMinMax.max

  areaRnf.addEventListener("input", () => {
    value = parseInt(input.value.replace(/\s/g, ""));

    new Cleave(input, {
      numeral: true,
      numeralThousandsGroupStyle: "thousand",
      delimiter: " ",
    });
  });

  const lessValue = () => {
    if (value > 0) {
      value = value - 1;
      input.value = parseInt(input.value.replace(/\s/g, "")) - 1;

      new Cleave(input, {
        numeral: true,
        numeralThousandsGroupStyle: "thousand",
        delimiter: " ",
      });
      identifyRnfArea(data, zoom, valueMinMax, value, type);
    }
  };

  const moreValue = () => {
    if (value < valueMax) {
      value = value + 1;
      input.value = parseInt(input.value.replace(/\s/g, "")) + 1;

      new Cleave(input, {
        numeral: true,
        numeralThousandsGroupStyle: "thousand",
        delimiter: " ",
      });
      identifyRnfArea(data, zoom, valueMinMax, value, type);
    }
  };

  more.onclick = () => moreValue();
  less.onclick = () => lessValue();

  // input.addEventListener("keydown", (e) => {
  //   if (e.key === "ArrowDown") {
  //     e.preventDefault();
  //     lessValue();
  //   }

  //   if (e.key === "ArrowUp") {
  //     e.preventDefault();
  //     moreValue();
  //   }
  // });
}
