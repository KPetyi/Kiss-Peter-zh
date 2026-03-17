export const employees = [
    { id: 1, name: "Anikó", role: "Developer", salary: 900000 },
    { id: 2, name: "Gergő", role: "Designer", salary: 750000 },
    { id: 3, name: "Zoltán", role: "Developer", salary: 1100000 },
    { id: 4, name: "Eszter", role: "Manager", salary: 1200000 },
    { id: 5, name: "Dávid", role: "Developer", salary: 850000 }
];

export function getHighEarners(staff, limit) {
    return staff
        .filter(person => person.salary > limit)
        .map(person => person.name);
}

export function applyDevBonus(staff) {
    return staff.map(person => {
        if (person.role === "Developer") {
            return {
                ...person,
                salary: Math.round(person.salary * 1.1)
            };
        }
        return person;
    });
}
