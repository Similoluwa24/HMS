const Invoice = require('../models/invoice');
const User = require('../models/user')
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const ErrorHandler = require('../utils/errorHandler');

// Create a new invoice
exports.createInvoice = catchAsyncErrors( async (req, res) => {
  
    const { patientId, services,patientAddress } = req.body;
    const patientExist = await User.findById(patientId)
    if (!patientExist) {
    //    return next(new ErrorHandler('Patient not Found',404))
        res.status(404).json('Patient not Found')
    }
    const totalCost = services.reduce((sum, service) => sum + service.cost, 0);

    const newInvoice = await Invoice.create({
      patientId,
      services,
      patientAddress,
      totalCost
    });
    res.status(201).json(newInvoice);
 });

// Get all invoices
exports.getAllInvoices = catchAsyncErrors( async (req, res) => {
 
    const invoices = await Invoice.find().populate('patientId');
    res.status(200).json(invoices);
 
});

// Get a single invoice
exports.getInvoiceById = catchAsyncErrors( async (req, res) => {
    const invoice = await Invoice.findById(req.params.id).populate('patientId');
    if (!invoice) {
      return next(new ErrorHandler('Invoice not found',404 ));
    }
    res.status(200).json(
        {invoice: Array.isArray(invoice) ? invoice : [invoice]}
    );
});

// Update an invoice
exports.updateInvoice =catchAsyncErrors( async (req, res) => {
 
    const { status } = req.body;
    const updatedInvoice = await Invoice.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updatedInvoice) {
        return next(new ErrorHandler('Invoice not found',404 ));
    }

    res.status(200).json(updatedInvoice);
 
});

// Delete an invoice
exports.deleteInvoice = catchAsyncErrors( async (req, res) => {
  
    const deletedInvoice = await Invoice.findByIdAndDelete(req.params.id);
    if (!deletedInvoice) {
        return next(new ErrorHandler('Invoice not found',404 ));
    }
    res.status(200).json({ message: 'Invoice deleted successfully' });
 
});

//find invoice by userID

exports.findInvoiceByUserId = catchAsyncErrors(async (req,res,next) => {
    const userId = req.user.id
    if (!userId) {
        return next(new ErrorHandler('This User not found',404))
    }
    const invoice = await Invoice.findOne({patientId:userId}).populate('patientId')

    
    res.status(200).json({
        invoice: Array.isArray(invoice) ? invoice :[invoice]
    })
})
