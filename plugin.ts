import { MarkdownIt } from 'markdown-it';
import * as MarkdownItVideo from "markdown-it-video";

var md = new MarkdownIt({
  html: true,
  linkify: true,
  typography: true
}).use(MarkdownItVideo, 
{
  youtube: { width: 640, height: 390 },
  vimeo: { width: 500, height: 281 },
  vine: { width: 600, height: 600, embed: 'simple' },
  prezi: { width: 550, height: 400 }
})

module.exports = (options={}, context:any) => ({
  define(){
    return KifViewerPlugin(md)
  }
})
const EMBED_REGEX = /@\[([kif].+)]\([\s]*(.*?)[\s]*[)]/im;

function kifViewerEmbed(md) {
  return md.replaceAll('href=', 'src=')
  //return kifViewerReturn;
}

function kifViewer(md) {
  return "<p>Hello, World!</p>";
  //return kifViewerReturn;
}

function KifViewerPlugin(md) {
  var theMd = md;
  theMd.renderer.rules.video = kifViewer(theMd);
  theMd.inline.ruler.before("link", "video", kifViewerEmbed(md));
  return theMd;
};
