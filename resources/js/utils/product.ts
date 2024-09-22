import { Attribute } from "@/types";

export const groupAttributes = (attributes: Attribute[]) => {
    const newValues: { [key: string]: Attribute[] } = {};
    attributes.forEach((attribute) => {
        if (Object.keys(newValues).includes(attribute.name)) {
            newValues[attribute.name] = [
                ...newValues[attribute.name],
                attribute,
            ];
        } else {
            newValues[attribute.name] = [attribute];
        }
    });
    return newValues;
};
