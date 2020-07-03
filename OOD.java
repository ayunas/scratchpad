//
//public abstract class Shape {
//
//    public static void main(String[] args) {
//        Shape[] shapes = new Shape[]{new Circle(), new Square()};
//        for (Shape shape : shapes) {
//            shape.draw();
//        }
//    }
//
//    abstract void draw();
//}
//
//
//class Circle extends Shape {
//    double itsRadius;
//    Point itsCenter;
//
//    @Override
//    void draw() {
//        //  implementation details for drawing a circle
//    }
//}
//
//class Square extends Shape {
//    double itsSide;
//    Point itsTopLeft;
//
//    @Override
//    void draw() {
//        //  implementation details for drawing a square
//    }
//}
//
//class Rectangle extends Shape {
//    double verticalSides;
//    double horizontalSides;
//    Point itsTopLeft;
//
//    @Override
//    void draw() {
//        //  implementation details for drawing a square
//    }
//}
//
//
//public abstract class Shape {
//    ShapeType itsType;
//
//    public static void main(String[] args) {
//        Shape[] shapes = new Shape[]{new Circle(), new Square()};
//        for (Shape shape : shapes) {
//            switch (shape.getType()) {
//                case square:
//                    drawSquare(shape);
//                    break;
//                case circle:
//                    drawCircle(shape);
//                    break;
//            }
//        }
//    }
//
//    static void drawSquare(Square square) {
//        //  implementation details for drawing a square
//    }
//
//    static void drawCircle(Circle circle) {
//        //  implementation details for drawing a circle
//    }
//
//    private ShapeType getType() {
//        return itsType;
//    }
//}
//
//
//class Circle extends Shape {
//    double itsRadius;
//    Point itsCenter;
//}
//
//class Square extends Shape {
//    double itsSide;
//    Point itsTopLeft;
//}
//
//
//
//public abstract class Shape {
//
//    public static void main(String[] args) {
//        int length = Integer.parseInt(args[0]);
//        Rectangle[] shapes = new Rectangle[]{new Rectangle(), new Square()};
//        for (Rectangle shape : shapes) {
//            if (Rectangle.class.equals(shape.getClass())) {
//                shape.addHeight(length);
//                shape.addWidth(length);
//            } else if (Square.class.equals(shape.getClass())) {
//                shape.addHeight(length);
//            }
//        }
//    }
//}
//
//class Rectangle {
//    double itsHeight;
//    double itsWidth;
//
//    void addHeight(double height) {
//        itsHeight += height;
//    }
//
//    void addWidth(double width) {
//        itsWidth += width;
//    }
//}
//
//class Rectangle {
//    double itsHeight;
//    double itsWidth;
//
//    void addHeight(double height) {
//        itsHeight += height;
//    }
//
//    void addWidth(double width) {
//        itsWidth += width;
//    }
//}
//
//
//class Square extends Rectangle {
//    double itsSide;
//
//    @Override
//    void addHeight(double height) {
//        itsSide += height;
//    }
//
//    @Override
//    void addWidth(double width) {
//        itsSide += width;
//    }
//}
