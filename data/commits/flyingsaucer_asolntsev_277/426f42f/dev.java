import org.xhtmlrenderer.pdf.Html2Pdf;
import static java.util.Objects.requireNonNull;
  public void wordwrap() {
    URL htmlUrl = requireNonNull(getClass().getResource("EndlessLoopTest_wordwrap.html"));
    byte[] pdf = Html2Pdf.fromUrl(htmlUrl);
    assertThat(new PDF(pdf)).containsText(