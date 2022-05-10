import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    AllProductItems:[
        // {
        //     id: 1,
        //     cateId: "shirts",
        //     img: '../../images/shirt/PATTERN_SHIRT.jpg',
        //     name: "DIRTYCOINS LOGO PATTERN SHIRT",
        //     content:'Sản phẩm được làm từ vải kate nhập khẩu. Họa tiết được dệt từ cuộn vải, có độ bền cao. Form cơ bản.',
        //     price: 450000
        // },
        {
            id: 1,
            cateId: 2,
            img:[
                "images/shirt/PATTERN_SHIRT.jpg",
                "../../images/jacket/Patched_Croptop_Jacket.jpg",
                "../../images/pant/Plaid_Pants_In_Bred.jpg"
            ],
            name: "DIRTYCOINS LOGO PATTERN SHIRT",
            content:'',
            price: 450000
        },
        {
            id: 2,
            cateId: "jackets",
            img: '../../images/jacket/Patched_Croptop_Jacket.jpg',
            name: "Patched Croptop Jacket",
            content:'Áo khoác croptop. Oversize form. Logo coins 1.0 phản quang. Tag cao su được may ở hai cánh tay.',
            price: 450000
        },
        {
            id: 3,
            cateId: "pants",
            img: '../../images/pant/Plaid_Pants_In_Bred.jpg',
            name: "Plaid Pants In Bred",
            content:' Quần được làm sản xuất từ khakhi. Logo được thêu ở phía túi trái.  Form oversize. Lưng quần bo vải gân kèm drawstring thun bên trong.',
            price: 450000
        },
        {
            id: 4,
            cateId: "pants",
            img: '../../images/pant/Dirtycoins_Sweat_Track_Pants.jpg',
            name: "Dirtycoins Sweat Track Pants",
            content:'Sản phẩm 100% cotton. Hình in được in ở hai bên phía ngoài ống quần. Quần sở hữu dây rút được trang bị đầu mút dây. Lưng quần có dây chun co giãn.',
            price: 440000
        },
        {
            id: 5,
            cateId: "hoodies",
            img: './../../images/hoodies/HOODIE_BIG_LOGO_SS2020_(GREEN).jpg',
            name: "HOODIE BIG LOGO SS2020 (GREEN)",
            content:'Form áo oversize. Phần hood có dây rút tùy chỉnh kích thước. Áo được trang bị túi kangaroo ở trước bụng. Họa tiết được thêu trực tiếp lên áo, có độ bền cao. Tà áo và cổ tay áo được bo vải gân.',
            price: 549000
        },
        {
            id: 6,
            cateId: "wallets",
            img: '../../images/wallets/VOLCANO_LONG_WALLET.jpg',
            name: "VOLCANO LONG WALLET",
            content:'Ví được làm từ vải canvas, kèm lót dù. Mặt ngoài phía trước ví sở hữu lớp Hologram PVC kèm tag nhựa. Ví đóng mở và sở hữu khóa dán velcro an toàn tiện lợi. 3 ngăn chính, trong đó có 1 ngăn được trang bị zipper YKK. 1 ngăn phụ có zipper YKK kèm 4 ngăn đựng thẻ.',
            price: 400000
        },
        {
            id: 7,
            cateId: "tshirts",
            img: '../../images/t-shirt/GRYNCH_T-SHIRT_(PINK).jpg',
            name: "GRYNCH T-SHIRT (PINK)",
            content:'Sản phẩm 100% cotton. Form áo cơ bản.  Họa tiết được in lên trực tiếp sản phẩm.',
            price: 370000
        },
        {
            id: 8,
            cateId: "shorts",
            img: '../../images/short/Signature_Y_Short.jpg',
            name: "Signature Y Short",
            content:'Form quần cơ bản. Dây quần có đầu dây bằng nhựa. 2 Túi ở phía trái phải quần.',
            price: 390000
        },
        {
            id: 9,
            cateId: "bags",
            img: './../../images/bags/MULTICOLOR_SHOULDER_BAG_(BLUE).jpg',
            name: "MULTICOLOR SHOULDER BAG (BLUE)",
            content:'Balo sản xuất từ vải bố và được lót dù. Có 1 ngăn lớn và 3 ngăn phụ. Khóa zipp YKK. Được trang bị thêm nắp đóng có khóa bấm. Được kèm theo 1 túi mini tiện dụng.',
            price: 190000
        },    
        {
            id: 10,
            cateId: "tshirts",
            img: '../../images/t-shirt/ACADEMY_DCS_T-SHIRT_(BLACK).jpg',
            name: "ACADEMY DCS T-SHIRT (BLACK)",
            content:'Sản phẩm 100% cotton. Form áo cơ bản. Họa tiết được thêu trực tiếp lên mặt ngoài vải.',
            price: 370000
        },
        {
            id: 11,
            cateId: "tshirts",
            img: '../../images/t-shirt/BLEACH_YOUR_BRAIN_OUT_T-SHIRT.jpg',
            name: "BLEACH YOUR BRAIN OUT T-SHIRT",
            content:'Sản phẩm 100% cotton. Họa tiết tie-dye được tẩy từ cuộn vải. Hình in hologram được in ở ngực và lưng áo. Tag phụ được may ở dưới góc tà áo.',
            price: 350000
        },
        {
            id: 12,
            cateId: "bags",
            img: '../../images/bags/DIRTY_COINS_ANGEL_BACKPACK.jpg',
            name: "DIRTY COINS ANGEL BACKPACK",
            content:'Mặt ngoài balo được làm từ vải bố, kèm với phía trong được lót dù. Mặt trước balo được in hình, có độ bền cao. Balo có 1 ngăn chính và 1 ngăn phụ phía mặt trước balo. Hai ngăn đựng bình nước tiện dụng ở hai bên hông balo. Kích thước balo: Dài x Rộng x Cao: 34cm x 17cm x 43cm.',
            price: 290000
        },
        {
            id: 13,
            cateId: "bags",
            img: '../../images/bags/fluffly_minibag.jpg',
            name: "fluffly minibag",
            content:'Túi đeo chéo nhỏ xinh với lớp lông siêu xịn mịn và vô cùng tiện dụng',
            price: 190000
        },
        {
            id: 14,
            cateId: "hats",
            img: '../../images/hats/Cap_SCHDTX.jpg',
            name: "Cap SCHDTX",
            content:'Toàn bộ phần thêu sử dụng chỉ ánh vàng và ánh bạc Metallic. Sử dụng vải cotton 14 với phối màu Off-white. Form nón Asia Standard 6 múi 57cm (± 3 cm) giúp ôm khít và tăng giảm dễ dàng với từng kiểu đầu người đội.',
            price: 180000
        },
        {
            id: 15,
            cateId: "hoodies",
            img: '../../images/hoodies/Shalala_Ocean_Hoodie.webp',
            name: "Shalala Ocean Hoodie",
            content:'Chất liệu vải nỉ cào với chỉ số chống tia UV là 115+ cùng độ bền màu, mềm mịn và chống xù lông.',
            price: 440000
        }
    ]
}

export default createSlice({
    name: "allProducts",
    initialState,
    reducers: {
        // imgChange: (state,action) => {
        //     state.img = action.payload;
        // },
    }
})

export const selectProductId = (state, productId) => state.allProducts.AllProductItems.filter(product => product.id === productId)