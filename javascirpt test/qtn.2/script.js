
        // Function to calculate tax based on salary
        function calculateTax() {
            // Get the salary value from input
            let salary = document.getElementById('salary').value;

            // Initialize tax variable
            let tax = 0;

            // Calculate tax based on conditions
            if (salary <= 300000) {
                tax = 0; // No tax for salary up to 3,00,000
            } else if (salary > 300000 && salary <= 750000) {
                tax = (salary - 300000) * 0.10; // 10% tax for salary between 3,00,000 and 7,50,000
            } else if (salary > 750000) {
                tax = (salary - 750000) * 0.20 + 45000; // 20% tax for salary above 7,50,000, plus tax for 3L to 7.5L
            }

            // Display the calculated tax
            document.getElementById('result').textContent = `Your tax is: ₹${tax.toFixed(2)}`;
        }
