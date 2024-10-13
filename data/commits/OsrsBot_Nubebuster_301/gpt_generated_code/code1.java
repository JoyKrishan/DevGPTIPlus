protected Point getPointInRange(int start, int end) {
    int locX = getLocalX();
    int locY = getLocalY();
    int height = methods.calc.tileHeight(locX, locY);
    Polygon[] triangles = this.getTriangles();
    List<Point> points = new ArrayList<>();

    for (int i = start; i < end && i < triangles.length; i++) {
        for (int n = 0; n < triangles[i].npoints; n++) {
            points.add(new Point(triangles[i].xpoints[n], triangles[i].ypoints[n]));
        }
    }

    if (points.isEmpty()) {
        return null;
    }

    // Return a random point from the list
    int randomIndex = StdRandom.uniform(points.size());
    return points.get(randomIndex);
}