import { useEffect } from "react";
import { useQuery } from 'urql';
import { getAllFonts } from '../../graphql';

const AllFonts = () => {
    const [fonts] = useQuery({
        query: getAllFonts,
        requestPolicy: 'network-only',
    });
    const { data: allFonts } = fonts;

    useEffect(() => {
        if (allFonts?.paginationFonts?.items) {
            allFonts?.paginationFonts?.items.forEach(async (fontInfo: any) => {
                const junction_font = new FontFace(
                    fontInfo?.name,
                    `url(${fontInfo.fontUrl})`
                );
                const loaded_face = await junction_font.load();
                document.fonts.add(loaded_face);
            });
        }
    }, [allFonts]);
    return null;
};

export default AllFonts;