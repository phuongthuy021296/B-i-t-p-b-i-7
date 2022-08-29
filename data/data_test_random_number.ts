export const DATA= [{
    random_from: "20",
    random_to: "20",
    expect: ["Minimum value must be different the maximum value", "Maximum value must be different the minimum value"]
},
    {
        random_from: "100",
        random_to: "20",
        expect: ["Minimum value must be smaller than the maximum value", "Maximum value must be greater than minimum value"]
    }
]