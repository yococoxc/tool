// 渐变方案数据 - 可独立维护和扩展
const gradientPresets = [

    // 红色系渐变 (25个)
    { name: "红粉渐变1", colors: ["#FF5252", "#FF8A80"] },
    { name: "红粉渐变2", colors: ["#FF6B6B", "#FFAAA5"] },
    { name: "红粉渐变3", colors: ["#FF4757", "#FF6B81"] },
    { name: "红粉渐变4", colors: ["#FF3E3E", "#FF7675"] },
    { name: "红粉渐变5", colors: ["#FF2E63", "#FF5E87"] },
    { name: "橙红渐变1", colors: ["#FF6B35", "#FF8C42"] },
    { name: "橙红渐变2", colors: ["#FF5722", "#FF9800"] },
    { name: "橙红渐变3", colors: ["#FF7043", "#FFA726"] },
    { name: "橙红渐变4", colors: ["#FF6F00", "#FFA000"] },
    { name: "橙红渐变5", colors: ["#F4511E", "#FFB74D"] },
    { name: "深红渐变1", colors: ["#C62828", "#B71C1C"] },
    { name: "深红渐变2", colors: ["#B71C1C", "#880E4F"] },
    { name: "深红渐变3", colors: ["#880E4F", "#4A148C"] },
    { name: "深红渐变4", colors: ["#C2185B", "#AD1457"] },
    { name: "深红渐变5", colors: ["#D32F2F", "#C62828"] },
    { name: "玫瑰红渐变1", colors: ["#E91E63", "#EC407A"] },
    { name: "玫瑰红渐变2", colors: ["#EC407A", "#F06292"] },
    { name: "玫瑰红渐变3", colors: ["#F06292", "#BA68C8"] },
    { name: "玫瑰红渐变4", colors: ["#E91E63", "#F8BBD0"] },
    { name: "玫瑰红渐变5", colors: ["#C2185B", "#F8BBD0"] },
    { name: "酒红渐变1", colors: ["#7B1FA2", "#9C27B0"] },
    { name: "酒红渐变2", colors: ["#8E24AA", "#BA68C8"] },
    { name: "酒红渐变3", colors: ["#6A1B9A", "#8E24AA"] },
    { name: "酒红渐变4", colors: ["#4A148C", "#6A1B9A"] },
    { name: "酒红渐变5", colors: ["#9C27B0", "#CE93D8"] },



    // 红色系按钮渐变 (15个)
    { name: "热情红按钮1", colors: ["#D32F2F", "#F44336", "#FF5252"] },
    { name: "热情红按钮2", colors: ["#B71C1C", "#C62828", "#E53935"] },
    { name: "红粉渐变按钮1", colors: ["#C2185B", "#E91E63", "#F06292", "#F8BBD0"] },
    { name: "红粉渐变按钮2", colors: ["#880E4F", "#AD1457", "#C2185B", "#EC407A"] },
    { name: "橙红渐变按钮1", colors: ["#E65100", "#F57C00", "#FF9800", "#FFB74D"] },
    { name: "橙红渐变按钮2", colors: ["#BF360C", "#E65100", "#F57C00", "#FFA726"] },
    { name: "酒红渐变按钮1", colors: ["#4A148C", "#6A1B9A", "#8E24AA", "#9C27B0"] },
    { name: "酒红渐变按钮2", colors: ["#311B92", "#4A148C", "#6A1B9A", "#7B1FA2"] },
    { name: "玫瑰红按钮1", colors: ["#880E4F", "#C2185B", "#E91E63", "#F48FB1"] },
    { name: "玫瑰红按钮2", colors: ["#AD1457", "#C2185B", "#D81B60", "#EC407A"] },
    { name: "暖红渐变按钮1", colors: ["#F4511E", "#FF7043", "#FF8A65", "#FFA000"] },
    { name: "暖红渐变按钮2", colors: ["#D32F2F", "#F4511E", "#FF5722", "#FF9800"] },
    { name: "紫红渐变按钮1", colors: ["#7B1FA2", "#9C27B0", "#C2185B", "#E91E63"] },
    { name: "紫红渐变按钮2", colors: ["#6A1B9A", "#8E24AA", "#AD1457", "#C2185B"] },
    { name: "深红渐变按钮", colors: ["#212121", "#424242", "#B71C1C", "#D32F2F"] },
    
    // 蓝色系渐变 (25个)
    { name: "浅蓝渐变1", colors: ["#4FC3F7", "#81D4FA"] },
    { name: "浅蓝渐变2", colors: ["#29B6F6", "#4FC3F7"] },
    { name: "浅蓝渐变3", colors: ["#03A9F4", "#81D4FA"] },
    { name: "浅蓝渐变4", colors: ["#0288D1", "#03A9F4"] },
    { name: "浅蓝渐变5", colors: ["#0277BD", "#1976D2"] },
    { name: "天蓝渐变1", colors: ["#1E88E5", "#42A5F5"] },
    { name: "天蓝渐变2", colors: ["#1976D2", "#64B5F6"] },
    { name: "天蓝渐变3", colors: ["#1565C0", "#42A5F5"] },
    { name: "天蓝渐变4", colors: ["#0D47A1", "#1976D2"] },
    { name: "天蓝渐变5", colors: ["#2196F3", "#BBDEFB"] },
    { name: "深蓝渐变1", colors: ["#1A237E", "#3F51B5"] },
    { name: "深蓝渐变2", colors: ["#283593", "#3949AB"] },
    { name: "深蓝渐变3", colors: ["#303F9F", "#5C6BC0"] },
    { name: "深蓝渐变4", colors: ["#3949AB", "#7986CB"] },
    { name: "深蓝渐变5", colors: ["#4527A0", "#5E35B1"] },
    { name: "蓝紫渐变1", colors: ["#512DA8", "#673AB7"] },
    { name: "蓝紫渐变2", colors: ["#673AB7", "#9575CD"] },
    { name: "蓝紫渐变3", colors: ["#7E57C2", "#B39DDB"] },
    { name: "蓝紫渐变4", colors: ["#651FFF", "#7E57C2"] },
    { name: "蓝紫渐变5", colors: ["#5E35B1", "#D1C4E9"] },
    { name: "青蓝渐变1", colors: ["#00ACC1", "#26C6DA"] },
    { name: "青蓝渐变2", colors: ["#00BCD4", "#4DD0E1"] },
    { name: "青蓝渐变3", colors: ["#0097A7", "#00BCD4"] },
    { name: "青蓝渐变4", colors: ["#26A69A", "#4DB6AC"] },
    { name: "青蓝渐变5", colors: ["#00897B", "#26A69A"] },



    // 蓝色系按钮渐变 (15个)
    { name: "深海蓝按钮1", colors: ["#0D47A1", "#1565C0", "#1976D2", "#1E88E5"] },
    { name: "深海蓝按钮2", colors: ["#1A237E", "#283593", "#303F9F", "#3949AB"] },
    { name: "天蓝渐变按钮1", colors: ["#1976D2", "#2196F3", "#42A5F5", "#64B5F6"] },
    { name: "天蓝渐变按钮2", colors: ["#0288D1", "#03A9F4", "#29B6F6", "#4FC3F7"] },
    { name: "浅蓝渐变按钮1", colors: ["#4FC3F7", "#64B5F6", "#90CAF9", "#BBDEFB"] },
    { name: "浅蓝渐变按钮2", colors: ["#29B6F6", "#4FC3F7", "#81D4FA", "#B3E5FC"] },
    { name: "蓝紫渐变按钮1", colors: ["#3949AB", "#5C6BC0", "#7E57C2", "#9575CD"] },
    { name: "蓝紫渐变按钮2", colors: ["#303F9F", "#5E35B1", "#7B1FA2", "#9C27B0"] },
    { name: "青蓝渐变按钮1", colors: ["#00897B", "#26A69A", "#4DB6AC", "#80CBC4"] },
    { name: "青蓝渐变按钮2", colors: ["#00695C", "#00897B", "#26A69A", "#4DB6AC"] },
    { name: "极光蓝按钮1", colors: ["#000000", "#1A237E", "#2196F3", "#BBDEFB"] },
    { name: "极光蓝按钮2", colors: ["#1A237E", "#3949AB", "#64B5F6", "#E3F2FD"] },
    { name: "冰蓝渐变按钮1", colors: ["#81D4FA", "#B3E5FC", "#E1F5FE", "#FFFFFF"] },
    { name: "冰蓝渐变按钮2", colors: ["#4FC3F7", "#81D4FA", "#B3E5FC", "#E0F7FA"] },
    { name: "蓝绿渐变按钮", colors: ["#1976D2", "#2196F3", "#26A69A", "#4CAF50"] },
    
    // 绿色系渐变 (25个)
    { name: "浅绿渐变1", colors: ["#81C784", "#A5D6A7"] },
    { name: "浅绿渐变2", colors: ["#66BB6A", "#81C784"] },
    { name: "浅绿渐变3", colors: ["#4CAF50", "#81C784"] },
    { name: "浅绿渐变4", colors: ["#43A047", "#66BB6A"] },
    { name: "浅绿渐变5", colors: ["#388E3C", "#4CAF50"] },
    { name: "翠绿渐变1", colors: ["#2E7D32", "#43A047"] },
    { name: "翠绿渐变2", colors: ["#1B5E20", "#388E3C"] },
    { name: "翠绿渐变3", colors: ["#2E7D32", "#66BB6A"] },
    { name: "翠绿渐变4", colors: ["#388E3C", "#81C784"] },
    { name: "翠绿渐变5", colors: ["#43A047", "#A5D6A7"] },
    { name: "蓝绿渐变1", colors: ["#26A69A", "#64FFDA"] },
    { name: "蓝绿渐变2", colors: ["#00897B", "#4DB6AC"] },
    { name: "蓝绿渐变3", colors: ["#00796B", "#26A69A"] },
    { name: "蓝绿渐变4", colors: ["#00695C", "#00897B"] },
    { name: "蓝绿渐变5", colors: ["#26C6DA", "#4DD0E1"] },
    { name: "黄绿渐变1", colors: ["#CDDC39", "#DCE775"] },
    { name: "黄绿渐变2", colors: ["#AFB42B", "#CDDC39"] },
    { name: "黄绿渐变3", colors: ["#9CCC65", "#AED581"] },
    { name: "黄绿渐变4", colors: ["#8BC34A", "#C5E1A5"] },
    { name: "黄绿渐变5", colors: ["#7CB342", "#AED581"] },
    { name: "橄榄绿渐变1", colors: ["#689F38", "#8BC34A"] },
    { name: "橄榄绿渐变2", colors: ["#558B2F", "#689F38"] },
    { name: "橄榄绿渐变3", colors: ["#33691E", "#558B2F"] },
    { name: "橄榄绿渐变4", colors: ["#2E7D32", "#8BC34A"] },
    { name: "橄榄绿渐变5", colors: ["#1B5E20", "#689F38"] },
    


    
    // 绿色系按钮渐变 (15个)
    { name: "翠绿渐变按钮1", colors: ["#2E7D32", "#388E3C", "#43A047", "#4CAF50"] },
    { name: "翠绿渐变按钮2", colors: ["#1B5E20", "#2E7D32", "#388E3C", "#66BB6A"] },
    { name: "浅绿渐变按钮1", colors: ["#66BB6A", "#81C784", "#A5D6A7", "#C8E6C9"] },
    { name: "浅绿渐变按钮2", colors: ["#4CAF50", "#66BB6A", "#81C784", "#AED581"] },
    { name: "蓝绿渐变按钮1", colors: ["#0097A7", "#00BCD4", "#26A69A", "#4DB6AC"] },
    { name: "蓝绿渐变按钮2", colors: ["#00ACC1", "#26C6DA", "#26A69A", "#66BB6A"] },
    { name: "黄绿渐变按钮1", colors: ["#AFB42B", "#CDDC39", "#8BC34A", "#AED581"] },
    { name: "黄绿渐变按钮2", colors: ["#8BC34A", "#CDDC39", "#DCE775", "#E6EE9C"] },
    { name: "橄榄绿按钮1", colors: ["#33691E", "#558B2F", "#689F38", "#8BC34A"] },
    { name: "橄榄绿按钮2", colors: ["#2E7D32", "#388E3C", "#558B2F", "#689F38"] },
    { name: "森林绿按钮1", colors: ["#004D40", "#00695C", "#00897B", "#26A69A"] },
    { name: "森林绿按钮2", colors: ["#1B5E20", "#388E3C", "#4CAF50", "#81C784"] },
    { name: "薄荷绿按钮1", colors: ["#4DB6AC", "#80CBC4", "#B2EBF2", "#E0F2F1"] },
    { name: "薄荷绿按钮2", colors: ["#26A69A", "#4DB6AC", "#80CBC4", "#B2EBF2"] },
    { name: "绿黄渐变按钮", colors: ["#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B"] },
    

    // 黄色系渐变 (25个)
    { name: "浅黄渐变1", colors: ["#FFEE58", "#FFF9C4"] },
    { name: "浅黄渐变2", colors: ["#FFEB3B", "#FFEE58"] },
    { name: "浅黄渐变3", colors: ["#FDD835", "#FFEB3B"] },
    { name: "浅黄渐变4", colors: ["#FBC02D", "#FDD835"] },
    { name: "浅黄渐变5", colors: ["#F9A825", "#FBC02D"] },
    { name: "金黄渐变1", colors: ["#FFC107", "#FFD54F"] },
    { name: "金黄渐变2", colors: ["#FFB300", "#FFCC80"] },
    { name: "金黄渐变3", colors: ["#FFA000", "#FFD54F"] },
    { name: "金黄渐变4", colors: ["#FF8F00", "#FFB74D"] },
    { name: "金黄渐变5", colors: ["#FF8000", "#FFCC80"] },
    { name: "橙黄渐变1", colors: ["#FF9800", "#FFB74D"] },
    { name: "橙黄渐变2", colors: ["#FFA726", "#FFCC80"] },
    { name: "橙黄渐变3", colors: ["#FFB74D", "#FFE0B2"] },
    { name: "橙黄渐变4", colors: ["#FF9800", "#FFE0B2"] },
    { name: "橙黄渐变5", colors: ["#FB8C00", "#FFE0B2"] },
    { name: "琥珀渐变1", colors: ["#FFC107", "#FF9800"] },
    { name: "琥珀渐变2", colors: ["#FFB300", "#F57C00"] },
    { name: "琥珀渐变3", colors: ["#FFA000", "#EF6C00"] },
    { name: "琥珀渐变4", colors: ["#FF8F00", "#E65100"] },
    { name: "琥珀渐变5", colors: ["#FF8000", "#E65100"] },
    { name: "暖黄渐变1", colors: ["#FFECB3", "#FFE082"] },
    { name: "暖黄渐变2", colors: ["#FFE0B2", "#FFCC80"] },
    { name: "暖黄渐变3", colors: ["#FFD54F", "#FFB74D"] },
    { name: "暖黄渐变4", colors: ["#FFF59D", "#FFE082"] },
    { name: "暖黄渐变5", colors: ["#FFF9C4", "#FFECB3"] },


    // 黄色系按钮渐变 (15个)
    { name: "阳光黄按钮1", colors: ["#FFC107", "#FFD54F", "#FFEE58", "#FFF9C4"] },
    { name: "阳光黄按钮2", colors: ["#FBC02D", "#FDD835", "#FFEB3B", "#FFEE58"] },
    { name: "橙黄渐变按钮1", colors: ["#FF9800", "#FFB74D", "#FFCC80", "#FFE0B2"] },
    { name: "橙黄渐变按钮2", colors: ["#FB8C00", "#FFA726", "#FFB74D", "#FFCC80"] },
    { name: "琥珀渐变按钮1", colors: ["#F57C00", "#FF9800", "#FFB74D", "#FFD54F"] },
    { name: "琥珀渐变按钮2", colors: ["#E65100", "#F57C00", "#FF9800", "#FFB74D"] },
    { name: "暖黄渐变按钮1", colors: ["#FFB300", "#FFC107", "#FFD54F", "#FFEE58"] },
    { name: "暖黄渐变按钮2", colors: ["#FFA000", "#FFB300", "#FFC107", "#FFD54F"] },
    { name: "金黄渐变按钮1", colors: ["#E6A600", "#FFB300", "#FFC107", "#FFD54F"] },
    { name: "金黄渐变按钮2", colors: ["#C89400", "#E6A600", "#FFB300", "#FFC107"] },
    { name: "夕阳渐变按钮1", colors: ["#FF5722", "#FF9800", "#FFB74D", "#FFCC80"] },
    { name: "夕阳渐变按钮2", colors: ["#E64A19", "#F57C00", "#FFA000", "#FFCC80"] },
    { name: "香槟渐变按钮1", colors: ["#FFFDE7", "#FFF9C4", "#FFECB3", "#FFE0B2"] },
    { name: "香槟渐变按钮2", colors: ["#FFF8E1", "#FFECB3", "#FFE0B2", "#FFCC80"] },
    { name: "黄橙红按钮", colors: ["#FFEB3B", "#FFC107", "#FF9800", "#F57C00"] },
    
    // 紫色系渐变 (25个)
    { name: "淡紫渐变1", colors: ["#CE93D8", "#E1BEE7"] },
    { name: "淡紫渐变2", colors: ["#BA68C8", "#CE93D8"] },
    { name: "淡紫渐变3", colors: ["#AB47BC", "#BA68C8"] },
    { name: "淡紫渐变4", colors: ["#9C27B0", "#BA68C8"] },
    { name: "淡紫渐变5", colors: ["#8E24AA", "#CE93D8"] },
    { name: "深紫渐变1", colors: ["#7B1FA2", "#9C27B0"] },
    { name: "深紫渐变2", colors: ["#6A1B9A", "#8E24AA"] },
    { name: "深紫渐变3", colors: ["#4A148C", "#6A1B9A"] },
    { name: "深紫渐变4", colors: ["#4A148C", "#8E24AA"] },
    { name: "深紫渐变5", colors: ["#311B92", "#6A1B9A"] },
    { name: "紫红渐变1", colors: ["#C2185B", "#E91E63"] },
    { name: "紫红渐变2", colors: ["#AD1457", "#C2185B"] },
    { name: "紫红渐变3", colors: ["#880E4F", "#AD1457"] },
    { name: "紫红渐变4", colors: ["#880E4F", "#C2185B"] },
    { name: "紫红渐变5", colors: ["#7B1FA2", "#C2185B"] },
    { name: "蓝紫渐变1", colors: ["#5E35B1", "#7E57C2"] },
    { name: "蓝紫渐变2", colors: ["#512DA8", "#7E57C2"] },
    { name: "蓝紫渐变3", colors: ["#4527A0", "#673AB7"] },
    { name: "蓝紫渐变4", colors: ["#3949AB", "#7E57C2"] },
    { name: "蓝紫渐变5", colors: ["#303F9F", "#5E35B1"] },
    { name: "粉紫渐变1", colors: ["#EC407A", "#F06292"] },
    { name: "粉紫渐变2", colors: ["#E91E63", "#F8BBD0"] },
    { name: "粉紫渐变3", colors: ["#C2185B", "#E1BEE7"] },
    { name: "粉紫渐变4", colors: ["#EC407A", "#BA68C8"] },
    { name: "粉紫渐变5", colors: ["#F06292", "#CE93D8"] },


    // 紫色系按钮渐变 (15个)
    { name: "淡紫渐变按钮1", colors: ["#BA68C8", "#CE93D8", "#E1BEE7", "#F3E5F5"] },
    { name: "淡紫渐变按钮2", colors: ["#9C27B0", "#BA68C8", "#CE93D8", "#D1C4E9"] },
    { name: "深紫渐变按钮1", colors: ["#4A148C", "#6A1B9A", "#8E24AA", "#9C27B0"] },
    { name: "深紫渐变按钮2", colors: ["#311B92", "#4A148C", "#6A1B9A", "#7B1FA2"] },
    { name: "紫红渐变按钮1", colors: ["#8E24AA", "#AD1457", "#C2185B", "#E91E63"] },
    { name: "紫红渐变按钮2", colors: ["#7B1FA2", "#9C27B0", "#C2185B", "#EC407A"] },
    { name: "蓝紫渐变按钮1", colors: ["#3949AB", "#5C6BC0", "#7E57C2", "#9575CD"] },
    { name: "蓝紫渐变按钮2", colors: ["#303F9F", "#5E35B1", "#7E57C2", "#B39DDB"] },
    { name: "粉紫渐变按钮1", colors: ["#C2185B", "#E91E63", "#EC407A", "#CE93D8"] },
    { name: "粉紫渐变按钮2", colors: ["#E91E63", "#F06292", "#F48FB1", "#CE93D8"] },
    { name: "紫罗兰按钮1", colors: ["#6A1B9A", "#8E24AA", "#9C27B0", "#BA68C8"] },
    { name: "紫罗兰按钮2", colors: ["#4A148C", "#7B1FA2", "#9C27B0", "#CE93D8"] },
    { name: "薰衣草按钮1", colors: ["#9575CD", "#B39DDB", "#CE93D8", "#E1BEE7"] },
    { name: "薰衣草按钮2", colors: ["#7E57C2", "#9575CD", "#B39DDB", "#D1C4E9"] },
    { name: "紫蓝渐变按钮", colors: ["#9C27B0", "#7E57C2", "#5C6BC0", "#42A5F5"] },
    
    // 中性色系渐变 (25个)
    { name: "灰白渐变1", colors: ["#F5F5F5", "#EEEEEE"] },
    { name: "灰白渐变2", colors: ["#EEEEEE", "#E0E0E0"] },
    { name: "灰白渐变3", colors: ["#E0E0E0", "#BDBDBD"] },
    { name: "灰白渐变4", colors: ["#BDBDBD", "#9E9E9E"] },
    { name: "灰白渐变5", colors: ["#9E9E9E", "#757575"] },
    { name: "灰黑渐变1", colors: ["#757575", "#616161"] },
    { name: "灰黑渐变2", colors: ["#616161", "#424242"] },
    { name: "灰黑渐变3", colors: ["#424242", "#212121"] },
    { name: "灰黑渐变4", colors: ["#333333", "#212121"] },
    { name: "灰黑渐变5", colors: ["#212121", "#000000"] },
    { name: "米白渐变1", colors: ["#FAFAFA", "#F5F5F5"] },
    { name: "米白渐变2", colors: ["#F5F5F5", "#F5F5DC"] },
    { name: "米白渐变3", colors: ["#F5F5DC", "#FFF8E1"] },
    { name: "米白渐变4", colors: ["#FFF8E1", "#FFECB3"] },
    { name: "米白渐变5", colors: ["#FFECB3", "#FFFDE7"] },
    { name: "棕灰渐变1", colors: ["#8D6E63", "#A1887F"] },
    { name: "棕灰渐变2", colors: ["#795548", "#8D6E63"] },
    { name: "棕灰渐变3", colors: ["#6D4C41", "#8D6E63"] },
    { name: "棕灰渐变4", colors: ["#5D4037", "#795548"] },
    { name: "棕灰渐变5", colors: ["#4E342E", "#6D4C41"] },
    { name: "银灰渐变1", colors: ["#CFD8DC", "#B0BEC5"] },
    { name: "银灰渐变2", colors: ["#B0BEC5", "#90A4AE"] },
    { name: "银灰渐变3", colors: ["#90A4AE", "#78909C"] },
    { name: "银灰渐变4", colors: ["#78909C", "#607D8B"] },
    { name: "银灰渐变5", colors: ["#607D8B", "#546E7A"] },
    
    // 混合色系渐变 (25个)
    { name: "彩虹渐变1", colors: ["#FF5252", "#FFEB3B", "#4CAF50", "#2196F3", "#9C27B0"] },
    { name: "彩虹渐变2", colors: ["#F44336", "#FF9800", "#FFEB3B", "#4CAF50", "#2196F3", "#9C27B0"] },
    { name: "冷暖渐变1", colors: ["#FF5252", "#2196F3"] },
    { name: "冷暖渐变2", colors: ["#FF9800", "#03A9F4"] },
    { name: "冷暖渐变3", colors: ["#FFEB3B", "#4CAF50"] },
    { name: "红绿渐变1", colors: ["#F44336", "#4CAF50"] },
    { name: "红绿渐变2", colors: ["#D32F2F", "#388E3C"] },
    { name: "红蓝渐变1", colors: ["#F44336", "#2196F3"] },
    { name: "红蓝渐变2", colors: ["#D32F2F", "#1976D2"] },
    { name: "绿蓝渐变1", colors: ["#4CAF50", "#2196F3"] },
    { name: "绿蓝渐变2", colors: ["#388E3C", "#1976D2"] },
    { name: "紫绿渐变1", colors: ["#9C27B0", "#4CAF50"] },
    { name: "紫绿渐变2", colors: ["#7B1FA2", "#388E3C"] },
    { name: "橙蓝渐变1", colors: ["#FF9800", "#2196F3"] },
    { name: "橙蓝渐变2", colors: ["#F57C00", "#1976D2"] },
    { name: "黄紫渐变1", colors: ["#FFEB3B", "#9C27B0"] },
    { name: "黄紫渐变2", colors: ["#FDD835", "#7B1FA2"] },
    { name: "日落渐变1", colors: ["#FF9966", "#FF5E62"] },
    { name: "日落渐变2", colors: ["#FF512F", "#F09819"] },
    { name: "日落渐变3", colors: ["#FF7E5F", "#FEB47B"] },
    { name: "海洋渐变1", colors: ["#43C6AC", "#191654"] },
    { name: "海洋渐变2", colors: ["#005AA7", "#FFFDE4"] },
    { name: "森林渐变1", colors: ["#22c1c3", "#fdbb2d"] },
    { name: "森林渐变2", colors: ["#56ab2f", "#a8e063"] },
    { name: "极光渐变", colors: ["#000000", "#434343", "#666666", "#b2b2b2", "#ffffff"] },


    // 混合色系按钮渐变 (25个)
    { name: "彩虹按钮1", colors: ["#F44336", "#FF9800", "#FFEB3B", "#4CAF50", "#2196F3"] },
    { name: "彩虹按钮2", colors: ["#E91E63", "#FF5722", "#FFC107", "#8BC34A", "#03A9F4", "#9C27B0"] },
    { name: "日落按钮1", colors: ["#FF512F", "#F09819", "#FFD380", "#FFEEAD"] },
    { name: "日落按钮2", colors: ["#D32F2F", "#FF5722", "#FF9800", "#FFB74D"] },
    { name: "海洋按钮1", colors: ["#1A237E", "#3949AB", "#2196F3", "#4FC3F7"] },
    { name: "海洋按钮2", colors: ["#004D40", "#00897B", "#03A9F4", "#B3E5FC"] },
    { name: "森林按钮1", colors: ["#1B5E20", "#388E3C", "#8BC34A", "#CDDC39"] },
    { name: "森林按钮2", colors: ["#2E7D32", "#66BB6A", "#8BC34A", "#DCE775"] },
    { name: "极光按钮1", colors: ["#000000", "#4A148C", "#2196F3", "#E3F2FD"] },
    { name: "极光按钮2", colors: ["#311B92", "#7B1FA2", "#2196F3", "#81D4FA"] },
    { name: "火焰按钮1", colors: ["#B71C1C", "#E53935", "#FF5722", "#FF9800"] },
    { name: "火焰按钮2", colors: ["#880E4F", "#C2185B", "#F57C00", "#FFB74D"] },
    { name: "翡翠按钮1", colors: ["#00695C", "#00897B", "#26A69A", "#4DB6AC", "#80CBC4"] },
    { name: "翡翠按钮2", colors: ["#004D40", "#00796B", "#26A69A", "#66BB6A", "#A5D6A7"] },
    { name: "水果渐变1", colors: ["#F44336", "#FF9800", "#FFEB3B", "#4CAF50"] },
    { name: "水果渐变2", colors: ["#E91E63", "#FF5722", "#FFC107", "#8BC34A", "#2196F3"] },
    { name: "冷暖渐变1", colors: ["#F44336", "#FF9800", "#42A5F5", "#2196F3"] },
    { name: "冷暖渐变2", colors: ["#E91E63", "#FFC107", "#26A69A", "#1976D2"] },
    { name: "宝石渐变1", colors: ["#8E24AA", "#3949AB", "#00897B", "#FF9800"] },
    { name: "宝石渐变2", colors: ["#4A148C", "#1565C0", "#00897B", "#FF5722"] },
    { name: "黎明渐变按钮", colors: ["#212121", "#7B1FA2", "#2196F3", "#FFB74D"] },
    { name: "黄昏渐变按钮", colors: ["#4A148C", "#E91E63", "#FF9800", "#FFEB3B"] },
    { name: "春季渐变按钮", colors: ["#E91E63", "#8BC34A", "#4CAF50", "#2196F3"] },
    { name: "秋季渐变按钮", colors: ["#880E4F", "#E65100", "#FFB300", "#8D6E63"] },
    { name: "金属渐变按钮", colors: ["#212121", "#616161", "#9E9E9E", "#E0E0E0"] },


    {
    "name": "Warm Flame",
    "direction": "linear",
    "angle": "45deg",
    "colors": ["#ff9a9e", "#fad0c4", "#fad0c4"],
    "positions": ["0%", "99%", "100%"]
  },
  {
    "name": "Night Fade",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#a18cd1", "#fbc2eb"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Spring Warmth",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#fad0c4", "#fad0c4", "#ffd1ff"],
    "positions": ["0%", "1%", "100%"]
  },
  {
    "name": "Juicy Peach",
    "direction": "linear",
    "angle": "90deg",
    "colors": ["#ffecd2", "#fcb69f"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Young Passion",
    "direction": "linear",
    "angle": "90deg",
    "colors": ["#ff8177", "#ff867a", "#ff8c7f", "#f99185", "#cf556c", "#b12a5b"],
    "positions": ["0%", "0%", "21%", "52%", "78%", "100%"]
  },
  {
    "name": "Lady Lips",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#ff9a9e", "#fecfef", "#fecfef"],
    "positions": ["0%", "99%", "100%"]
  },
  {
    "name": "Sunny Morning",
    "direction": "linear",
    "angle": "120deg",
    "colors": ["#f6d365", "#fda085"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Rainy Ashville",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#fbc2eb", "#a6c1ee"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Frozen Dreams",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#fdcbf1", "#fdcbf1", "#e6dee9"],
    "positions": ["0%", "1%", "100%"]
  },
  {
    "name": "Winter Neva",
    "direction": "linear",
    "angle": "120deg",
    "colors": ["#a1c4fd", "#c2e9fb"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Dusty Grass",
    "direction": "linear",
    "angle": "120deg",
    "colors": ["#d4fc79", "#96e6a1"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Tempting Azure",
    "direction": "linear",
    "angle": "120deg",
    "colors": ["#84fab0", "#8fd3f4"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Heavy Rain",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#cfd9df", "#e2ebf0"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Amy Crisp",
    "direction": "linear",
    "angle": "120deg",
    "colors": ["#a6c0fe", "#f68084"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Mean Fruit",
    "direction": "linear",
    "angle": "120deg",
    "colors": ["#fccb90", "#d57eeb"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Deep Blue",
    "direction": "linear",
    "angle": "120deg",
    "colors": ["#e0c3fc", "#8ec5fc"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Ripe Malinka",
    "direction": "linear",
    "angle": "120deg",
    "colors": ["#f093fb", "#f5576c"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Cloudy Knoxville",
    "direction": "linear",
    "angle": "120deg",
    "colors": ["#fdfbfb", "#ebedee"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Malibu Beach",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#4facfe", "#00f2fe"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "New Life",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#43e97b", "#38f9d7"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "True Sunset",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#fa709a", "#fee140"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Morpheus Den",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#30cfd0", "#330867"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Rare Wind",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#a8edea", "#fed6e3"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Near Moon",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#5ee7df", "#b490ca"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Wild Apple",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#d299c2", "#fef9d7"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Saint Petersburg",
    "direction": "linear",
    "angle": "135deg",
    "colors": ["#f5f7fa", "#c3cfe2"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Arielles Smile",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#16d9e3", "#30c7ec", "#46aef7"],
    "positions": ["0%", "47%", "100%"]
  },
  {
    "name": "Plum Plate",
    "direction": "linear",
    "angle": "135deg",
    "colors": ["#667eea", "#764ba2"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Everlasting Sky",
    "direction": "linear",
    "angle": "135deg",
    "colors": ["#fdfcfb", "#e2d1c3"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Happy Fisher",
    "direction": "linear",
    "angle": "120deg",
    "colors": ["#89f7fe", "#66a6ff"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Blessing",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#fddb92", "#d1fdff"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Sharpeye Eagle",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#9890e3", "#b1f4cf"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Ladoga Bottom",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#ebc0fd", "#d9ded8"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Lemon Gate",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#96fbc4", "#f9f586"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Itmeo Branding",
    "direction": "linear",
    "angle": "180deg",
    "colors": ["#2af598", "#009efd"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Zeus Miracle",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#cd9cf2", "#f6f3ff"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Old Hat",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#e4afcb", "#b8cbb8", "#b8cbb8", "#e2c58b", "#c2ce9c", "#7edbdc"],
    "positions": ["0%", "0%", "0%", "30%", "64%", "100%"]
  },
  {
    "name": "Star Wine",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#b8cbb8", "#b8cbb8", "#b465da", "#cf6cc9", "#ee609c", "#ee609c"],
    "positions": ["0%", "0%", "0%", "33%", "66%", "100%"]
  },
  {
    "name": "Blue Velvet",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#6a11cb", "#2575fc"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Happy Acid",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#37ecba", "#72afd3"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Awesome Pine",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#ebbba7", "#cfc7f8"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "New York",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#fff1eb", "#ace0f9"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Shy Rainbow",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#eea2a2", "#bbc1bf", "#57c6e1"],
    "positions": ["0%", "19%", "42%"]
  },
  {
    "name": "Mixed Hopes",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#c471f5", "#fa71cd"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Fly High",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#48c6ef", "#6f86d6"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Strong Bliss",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#f78ca0", "#f9748f", "#fd868c"],
    "positions": ["0%", "19%", "60%"]
  },
  {
    "name": "Fresh Milk",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#feada6", "#f5efef"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Snow Again",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#e6e9f0", "#eef1f5"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "February Ink",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#accbee", "#e7f0fd"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Kind Steel",
    "direction": "linear",
    "angle": "-20deg",
    "colors": ["#e9defa", "#fbfcdb"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Soft Grass",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#c1dfc4", "#deecdd"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Grown Early",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#0ba360", "#3cba92"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Sharp Blues",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#00c6fb", "#005bea"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Shady Water",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#74ebd5", "#9face6"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Dirty Beauty",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#6a85b6", "#bac8e0"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Great Whale",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#a3bded", "#6991c7"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Teen Notebook",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#9795f0", "#fbc8d4"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Polite Rumors",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#a7a6cb", "#8989ba", "#8989ba"],
    "positions": ["0%", "52%", "100%"]
  },
  {
    "name": "Sweet Period",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#3f51b1", "#5a55ae", "#7b5fac", "#8f6aae", "#a86aa4", "#cc6b8e", "#f18271", "#f3a469", "#f7c978"],
    "positions": ["0%", "13%", "25%", "38%", "50%", "62%", "75%", "87%", "100%"]
  },
  {
    "name": "Wide Matrix",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#fcc5e4", "#fda34b", "#ff7882", "#c8699e", "#7046aa", "#0c1db8", "#020f75"],
    "positions": ["0%", "15%", "35%", "52%", "71%", "87%", "100%"]
  },
  {
    "name": "Soft Cherish",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#dbdcd7", "#dddcd7", "#e2c9cc", "#e7627d", "#b8235a", "#801357", "#3d1635", "#1c1a27"],
    "positions": ["0%", "24%", "30%", "46%", "59%", "71%", "84%", "100%"]
  },
  {
    "name": "Red Salvation",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#f43b47", "#453a94"],
    "positions": ["0%", "100%"]
  },
  {
    "name": "Burning Spring",
    "direction": "linear",
    "angle": "0deg",
    "colors": ["#4fb576", "#44c489", "#28a9ae", "#28a2b7", "#4c7788", "#6c4f63", "#432c39"],
    "positions": ["0%", "30%", "46%", "59%", "71%", "80%", "100%"]
  },
  {
    "name": "Night Party",
    "direction": "linear",
    "angle": "0deg",
    "colors": [],
    "positions": []
  },
    {
        name: "蓝紫渐变",
        direction: "linear",
        angle: "-225deg",
        colors: ["#3D4E81", "#5753C9", "#6E7FF3"],
        positions: ["0%", "48%", "100%"]
    },
    {
        name: "彩虹渐变",
        direction: "linear",
        angle: "90deg",
        colors: ["#ff0000", "#ffff00", "#00ff00", "#00ffff", "#0000ff"],
        positions: ["0%", "25%", "50%", "75%", "100%"]
    },
    {
        name: "日落渐变",
        direction: "linear",
        angle: "180deg",
        colors: ["#FF512F", "#F09819"],
        positions: ["0%", "100%"]
    },
    {
        name: "海洋渐变",
        direction: "linear",
        angle: "45deg",
        colors: ["#1A2980", "#26D0CE"],
        positions: ["0%", "100%"]
    },
    {
        name: "森林渐变",
        direction: "radial",
        angle: "circle",
        colors: ["#2E7D32", "#81C784"],
        positions: ["0%", "100%"]
    },
    {
        name: "复古渐变",
        direction: "linear",
        angle: "135deg",
        colors: ["#8B4513", "#D2B48C", "#F5DEB3"],
        positions: ["0%", "50%", "100%"]
    },
    {
        name: "科技蓝",
        direction: "linear",
        angle: "270deg",
        colors: ["#0072ff", "#00c6ff"],
        positions: ["0%", "100%"]
    },
    {
        name: "梦幻紫",
        direction: "linear",
        angle: "135deg",
        colors: ["#6a11cb", "#2575fc"],
        positions: ["0%", "100%"]
    },
    {
        name: "热情红",
        direction: "linear",
        angle: "45deg",
        colors: ["#d31027", "#ea384d"],
        positions: ["0%", "100%"]
    },
    {
        name: "清新绿",
        direction: "linear",
        angle: "90deg",
        colors: ["#38ef7d", "#11998e"],
        positions: ["0%", "100%"]
    },
    {
        name: "温暖橙",
        direction: "linear",
        angle: "180deg",
        colors: ["#ff9966", "#ff5e62"],
        positions: ["0%", "100%"]
    },
    {
        name: "商务灰",
        direction: "linear",
        angle: "0deg",
        colors: ["#232526", "#414345"],
        positions: ["0%", "100%"]
    },
    {
        name: "粉紫渐变",
        direction: "linear",
        angle: "225deg",
        colors: ["#C9D6FF", "#E2E2E2", "#F7BB97", "#DD5E89"],
        positions: ["0%", "25%", "75%", "100%"]
    },
    {
        name: "蓝绿渐变",
        direction: "linear",
        angle: "315deg",
        colors: ["#4ECDC4", "#556270"],
        positions: ["0%", "100%"]
    },
    {
        name: "金色渐变",
        direction: "radial",
        angle: "circle farthest-corner",
        colors: ["#ffe000", "#799f0c"],
        positions: ["0%", "100%"]
    },
    {
        name: "冷调渐变",
        direction: "linear",
        angle: "180deg",
        colors: ["#5433FF", "#20BDFF", "#A5FECB"],
        positions: ["0%", "50%", "100%"]
    },
    {
        name: "火焰渐变",
        direction: "linear",
        angle: "45deg",
        colors: ["#f9d423", "#ff4e50"],
        positions: ["0%", "100%"]
    },
    {
        name: "极光渐变",
        direction: "linear",
        angle: "270deg",
        colors: ["#00DBDE", "#FC00FF"],
        positions: ["0%", "100%"]
    }
];
