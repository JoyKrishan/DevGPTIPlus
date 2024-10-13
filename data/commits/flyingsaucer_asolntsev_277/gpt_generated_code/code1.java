import java.util.regex.*;

public class XHTMLValidator {
    
    public static String fixXHTML(String input) {
        // Fix start tags
        input = fixStartTags(input);
        // Fix end tags
        input = fixEndTags(input);
        return input;
    }
    
    private static String fixStartTags(String input) {
        Pattern startTagPattern = Pattern.compile("<(\\w+)([^>]*)>");
        Matcher matcher = startTagPattern.matcher(input);
        StringBuffer sb = new StringBuffer();
        while (matcher.find()) {
            String tag = matcher.group(1);
            String attributes = matcher.group(2);
            matcher.appendReplacement(sb, "<" + tag.toLowerCase() + attributes + ">");
        }
        matcher.appendTail(sb);
        return sb.toString();
    }
    
    private static String fixEndTags(String input) {
        Pattern endTagPattern = Pattern.compile("</(\\w+)([^>]*)>");
        Matcher matcher = endTagPattern.matcher(input);
        StringBuffer sb = new StringBuffer();
        while (matcher.find()) {
            String tag = matcher.group(1);
            matcher.appendReplacement(sb, "</" + tag.toLowerCase() + ">");
        }
        matcher.appendTail(sb);
        return sb.toString();
    }

    public static void main(String[] args) {
        String html = "<html><BODY><P>Invalid<p>missing end tag</BODY></html>";
        String fixedHTML = XHTMLValidator.fixXHTML(html);
        System.out.println("Fixed XHTML:\n" + fixedHTML);
    }
}