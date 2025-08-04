function calculateCubicYards() {
      const length = parseFloat(document.getElementById('length').value);
      const width = parseFloat(document.getElementById('width').value);
      const depth = parseFloat(document.getElementById('depth').value);

      if (isNaN(length) || isNaN(width) || isNaN(depth)) {
        alert('Please enter valid numbers for all fields.');
        return;
      }

      // Convert depth from inches to feet (1 foot = 12 inches)
      const depthFeet = depth / 12;
      
      // Calculate cubic feet (length * width * depth)
      const cubicFeet = length * width * depthFeet;
      
      // Convert to cubic yards (1 cubic yard = 27 cubic feet)
      const cubicYards = cubicFeet / 27;
      
      // Round to 2 decimal places
      const result = cubicYards.toFixed(2);

      const resultDiv = document.getElementById('result');
      resultDiv.textContent = `You need approximately ${result} cubic yards.`;
      resultDiv.classList.add('show');

    }
    function clearInputs() {
    document.getElementById('length').value = '';
    document.getElementById('width').value = '';
    document.getElementById('depth').value = '';
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = '';
    resultDiv.classList.remove('show');
  }