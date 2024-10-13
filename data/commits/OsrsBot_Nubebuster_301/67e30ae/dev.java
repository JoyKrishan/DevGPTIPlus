		return m -> Arrays.equals(m.indices1, vertex_a);
		} else {
	protected void update() {
	}
	 * @param leftClick if true it left-clicks.
	 * screen it will return null.
	 * of an object.
		ArrayList<Polygon> polys = new ArrayList<>(model.getFaceCount());
		double averageTriangleLength = (double) (trianglesX.length + trianglesY.length + trianglesZ.length) / 3;
		return polys.toArray(new Polygon[0]);
	 * z points as this model. This method compares all the values in the
	 * points as this.
	/**
	 * This function first chooses a random triangle from the model polygons.
	 * Then it generates two random numbers between 0 and 1.
	 * These numbers are used as barycentric coordinates to generate
	 * a point that is guaranteed to be within the chosen triangle.
	 *
	 * @return a random point that collides with the polygons of this model.
	 */
		// pick a random triangle
		int randomIndex = StdRandom.uniform(triangles.length);
		Polygon triangle = triangles[randomIndex];
		// pick random barycentric coordinates
		double r1 = StdRandom.uniform();
		double r2 = StdRandom.uniform();
		// generate a point within the triangle using the barycentric coordinates
		int x = (int) ((1 - Math.sqrt(r1)) * triangle.xpoints[0] + (Math.sqrt(r1) * (1 - r2)) * triangle.xpoints[1] + (Math.sqrt(r1) * r2) * triangle.xpoints[2]);
		int y = (int) ((1 - Math.sqrt(r1)) * triangle.ypoints[0] + (Math.sqrt(r1) * (1 - r2)) * triangle.ypoints[1] + (Math.sqrt(r1) * r2) * triangle.ypoints[2]);
				//TODO this is not working. This will not loop, it will return the first xpoint
		if (ex == -1) {