import Cleave from "cleave.js";
import { identifyRnfArea } from "./identifyRnfArea";

export function changeValue(data, zoom, areaRnf, input, valueMinMax, type) {
  const more = areaRnf.querySelector(".more");
  const less = areaRnf.querySelector(".less");

  let value = parseInt(input.value.replace(/\s/g, ""));
  const valueMax = valueMinMax.max;

  areaRnf.addEventListener("input", () => {
    // If the input is empty, then her value is 0 
    if (!parseInt(input.value.replace(/\s/g, ""))) {
      value = 0;
      console.log(0)
    } else {
      value = parseInt(input.value.replace(/\s/g, ""));
    }

    new Cleave(input, {
      numeral: true,
      numeralThousandsGroupStyle: "thousand",
      delimiter: " ",
    });

    identifyRnfArea(data, zoom, valueMinMax, value, type);
  });

  const lessValue = () => {
    if (value > 0) {
      value--;
      input.value = value;

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
      value++;
      input.value = value;

      new Cleave(input, {
        numeral: true,
        numeralThousandsGroupStyle: "thousand",
        delimiter: " ",
      });

      identifyRnfArea(data, zoom, valueMinMax, value, type);
    }
  };

  more.onclick = moreValue;
  less.onclick = lessValue;

  if (input._customKeydownHandler) {
    input.removeEventListener("keydown", input._customKeydownHandler);
  }

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

  input._customKeydownHandler = handler;

  input.addEventListener("keydown", handler);
}
