/**
 * OSCA INDIA - Professional PDF Invoice / Bill Generator
 * Generates clean, crisp A4 PDF invoices.
 */

window.InvoiceGenerator = {
  generatePDF: function (orderData) {
    if (!window.jspdf || !window.jspdf.jsPDF) {
      alert("PDF engine is initializing, please click again in a moment.");
      return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const customer = orderData.customer || {};
    const items = orderData.items || [];
    const invoiceId = orderData.invoice_id || `OSCA-INV-${Date.now().toString().slice(-6)}`;
    const dateStr = orderData.created_date_str || new Date().toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });

    // 1. Sleek Top Bar
    doc.setFillColor(8, 12, 20); // Deep navy
    doc.rect(0, 0, 210, 32, "F");

    doc.setFillColor(0, 240, 255); // Cyan accent line
    doc.rect(0, 31, 210, 1.5, "F");

    // Brand Name: OSCA INDIA
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(255, 255, 255);
    doc.text("OSCA", 14, 17);

    doc.setFontSize(14);
    doc.setTextColor(0, 240, 255);
    doc.text("INDIA", 42, 17);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text("Premier Graphic Design & Media Studio • Hotline / WhatsApp: +91 6200177076", 14, 25);

    // Right Side: Invoice Heading
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(0, 240, 255);
    doc.text("TAX INVOICE / BILL", 196, 17, { align: "right" });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(255, 255, 255);
    doc.text(`Invoice No: ${invoiceId}`, 196, 23, { align: "right" });
    doc.text(`Date: ${dateStr}`, 196, 28, { align: "right" });

    // 2. Client & Provider Info
    const startY = 40;

    // Provider Details
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text("SERVICE PROVIDER (STUDIO):", 14, startY);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(71, 85, 105);
    doc.text("OSCA INDIA Creative Design Studio", 14, startY + 5);
    doc.text("WhatsApp / Call: +91 6200177076", 14, startY + 10);
    doc.text("Email: support@oscaindia.com", 14, startY + 15);
    doc.text("Payment: Verified Order Confirmation", 14, startY + 20);

    // Client Details Box
    doc.setFillColor(248, 250, 252);
    doc.roundedRect(115, startY - 2, 81, 26, 2, 2, "F");
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(115, startY - 2, 81, 26, 2, 2, "D");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text("BILLED TO (CLIENT):", 120, startY + 4);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(30, 41, 59);
    doc.text(`Client: ${customer.name || "Valued Client"}`, 120, startY + 9);
    doc.text(`Phone / WA: ${customer.phone || "+91 6200177076"}`, 120, startY + 14);
    doc.text(`Brand / Business: ${customer.brand || "Personal"}`, 120, startY + 19);

    // 3. Table of Services
    const tableData = items.map((item, index) => {
      const unitPrice = Number(item.price) || 0;
      const qty = Number(item.quantity) || 1;
      const total = unitPrice * qty;
      return [
        index + 1,
        item.title || "Graphic Design Creative",
        item.category_name || "Creative",
        qty,
        `Rs. ${unitPrice.toLocaleString("en-IN")}`,
        `Rs. ${total.toLocaleString("en-IN")}`
      ];
    });

    doc.autoTable({
      startY: 72,
      head: [["#", "Design Service Description", "Category", "Qty", "Rate", "Total (INR)"]],
      body: tableData,
      theme: "grid",
      headStyles: {
        fillColor: [8, 12, 20],
        textColor: [255, 255, 255],
        fontStyle: "bold",
        fontSize: 8.5,
        halign: "center",
      },
      columnStyles: {
        0: { halign: "center", cellWidth: 10 },
        1: { halign: "left", cellWidth: 80 },
        2: { halign: "left", cellWidth: 35 },
        3: { halign: "center", cellWidth: 15 },
        4: { halign: "right", cellWidth: 25 },
        5: { halign: "right", cellWidth: 31 },
      },
      styles: {
        fontSize: 8,
        cellPadding: 3.5,
        textColor: [30, 41, 59],
        lineColor: [226, 232, 240],
      },
      alternateRowStyles: {
        fillColor: [248, 250, 252],
      },
    });

    const finalY = doc.lastAutoTable.finalY + 6;

    // 4. Calculations Box (Right)
    const subtotal = orderData.subtotal || items.reduce((sum, it) => sum + (it.price * it.quantity), 0);
    const discount = orderData.discount || 0;
    const grandTotal = Math.max(0, subtotal - discount);

    const calcX = 115;
    doc.setFillColor(248, 250, 252);
    doc.roundedRect(calcX, finalY, 81, 32, 2, 2, "F");
    doc.setDrawColor(203, 213, 225);
    doc.roundedRect(calcX, finalY, 81, 32, 2, 2, "D");

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(71, 85, 105);

    doc.text("Subtotal Amount:", calcX + 5, finalY + 6);
    doc.text(`Rs. ${subtotal.toLocaleString("en-IN")}`, 190, finalY + 6, { align: "right" });

    doc.text("Promotional Discount:", calcX + 5, finalY + 12);
    doc.text(`- Rs. ${discount.toLocaleString("en-IN")}`, 190, finalY + 12, { align: "right" });

    doc.text("Taxes / GST (0% Inclusive):", calcX + 5, finalY + 18);
    doc.text(`Rs. 0`, 190, finalY + 18, { align: "right" });

    doc.setDrawColor(15, 23, 42);
    doc.line(calcX + 4, finalY + 21, 192, finalY + 21);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text("Net Total Payable:", calcX + 5, finalY + 27);
    doc.setTextColor(0, 150, 214);
    doc.text(`Rs. ${grandTotal.toLocaleString("en-IN")}`, 190, finalY + 27, { align: "right" });

    // 5. UPI Payment Box (Left)
    doc.setFillColor(240, 253, 250);
    doc.roundedRect(14, finalY, 95, 32, 2, 2, "F");
    doc.setDrawColor(153, 246, 228);
    doc.roundedRect(14, finalY, 95, 32, 2, 2, "D");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.setTextColor(13, 148, 136);
    doc.text("OFFICIAL PAYMENT INFO & CONFIRMATION", 18, finalY + 6);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(30, 41, 59);
    doc.text("• Mode: Instant verification on WhatsApp", 18, finalY + 12);
    doc.text("• Hotline & Support: Available 24/7", 18, finalY + 17);
    doc.text("• Beneficiary: OSCA INDIA", 18, finalY + 22);
    doc.text("• Share order screenshot on WhatsApp to begin work.", 18, finalY + 27);

    // 6. Simple Terms & Signature
    const termsY = finalY + 40;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(15, 23, 42);
    doc.text("TERMS & DELIVERY CONDITIONS:", 14, termsY);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(100, 116, 139);
    doc.text("1. Design draft delivered in 24-48 hours via WhatsApp / Email.", 14, termsY + 4.5);
    doc.text("2. Includes High-Res PNG, JPEG, Vector & PSD source files.", 14, termsY + 8.5);
    doc.text("3. Free unlimited revisions until complete satisfaction.", 14, termsY + 12.5);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(15, 23, 42);
    doc.text("FOR OSCA INDIA", 160, termsY + 4.5);

    doc.setFont("courier", "italic");
    doc.setFontSize(10);
    doc.setTextColor(0, 150, 214);
    doc.text("Authorized Sign", 160, termsY + 11);

    // Footer Strip
    doc.setFillColor(8, 12, 20);
    doc.rect(0, 286, 210, 11, "F");

    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(203, 213, 225);
    doc.text(
      "Thank you for choosing OSCA INDIA! Direct Helpline & WhatsApp: +91 6200177076",
      105,
      293,
      { align: "center" }
    );

    const filename = `${invoiceId}.pdf`;
    doc.save(filename);
    return filename;
  }
};
