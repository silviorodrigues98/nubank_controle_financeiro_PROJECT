export const parseCSV = (csvData: string): Record<string, number> => {
    const categoryTotals: Record<string, number> = {};
    csvData.split('\n').forEach((line) => {
        const columns = line.split(',');
        const category = columns[1];
        const amount = columns[3];
        if (category && amount && !isNaN(Number(amount))) {
            categoryTotals[category] = (categoryTotals[category] || 0) + Number(amount);
        }
    });
      const formattedCategoryTotals = Object.keys(categoryTotals).reduce((acc, key) => {
            acc[key] = Math.round(categoryTotals[key] * 100) / 100;
            return acc;
        }, {} as Record<string, number>);
    return formattedCategoryTotals;
};