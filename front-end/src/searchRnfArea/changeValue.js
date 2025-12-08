import Cleave from "cleave.js";
import { identifyRnfArea } from "./identifyRnfArea";
import { updateElementListener } from "../utils/updateElementListener";

export function changeValue(data, areaRnf, input, valueMinMax, type) {
  const more = areaRnf.querySelector(".more");
  const less = areaRnf.querySelector(".less");

  if (data.length === 0) {
    input.value = 0;
  }

  let value = parseInt(input.value.replace(/\s/g, ""));
  const valueMax = valueMinMax.max;

  areaRnf.addEventListener("input", () => {
    // If the input is empty, then her value is 0
    if (!parseInt(input.value.replace(/\s/g, ""))) {
      value = 0;
    } else {
      value = parseInt(input.value.replace(/\s/g, ""));
    }

    // Thousands spacing
    new Cleave(input, {
      numeral: true,
      numeralThousandsGroupStyle: "thousand",
      delimiter: " ",
    });

    identifyRnfArea(data, valueMinMax, value, type);
  });

  const lessValue = () => {
    if (value > 0) {
      value--;
      input.value = value;

      // Thousands spacing
      new Cleave(input, {
        numeral: true,
        numeralThousandsGroupStyle: "thousand",
        delimiter: " ",
      });

      identifyRnfArea(data, valueMinMax, value, type);
    }
  };

  const moreValue = () => {
    if (value < valueMax) {
      value++;
      input.value = value;

      // Thousands spacing
      new Cleave(input, {
        numeral: true,
        numeralThousandsGroupStyle: "thousand",
        delimiter: " ",
      });

      identifyRnfArea(data, valueMinMax, value, type);
    }
  };

  more.onclick = moreValue;
  less.onclick = lessValue;

  // Actualisation EventListener
  const handler = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      lessValue();
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      moreValue();
    }
  };

  updateElementListener(input, "keydown", handler);
}
